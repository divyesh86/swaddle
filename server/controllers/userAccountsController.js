const UserAccount = require("../models/userAccount");
let transactionController = require('./transactionController');
let bankService = require("../services/bankService");
let moment = require('moment');





let insertAccount = async(userAccount) => {

    try{
        return await UserAccount
            .create(
                {
                    availableBalance: userAccount.availableBalance,
                    currentBalance: userAccount.currentBalance,
                    accountNumber: userAccount.accountNumber,
                    accountName: userAccount.accountName,
                    accountType: userAccount.accountType,
                    bankName: userAccount.bankName,
                    accessToken: userAccount.accessToken,
                    itemId : userAccount.itemId,
                    date : userAccount.date

                }
            );

    }catch(err){
        console.error(err);
        return ({errorMsg: err.message})
    }
};

let findAll = async () => {
    try{
        return await UserAccount
            .find().sort({date: -1})
    }catch(err){
        return ({errorMsg: err.message})
    }
};

let totalCount = async () => {
    try{
        return await UserAccount
            .count()
    }catch(err){
        return ({errorMsg: err.message})
    }
};

let findAccount = async (accountNumber, bankName) => {
    try{
        return await UserAccount
            .find({accountNumber : accountNumber, bankName : bankName});
    }catch(err){
        return ({errorMsg: err.message})
    }
};


let addNewAccountData = async(publicToken) => {

    try {


        let addNewAccounts =  await insertNewAccounts(publicToken);
        let addTransactions = await fetchTransactions(30, addNewAccounts.accessToken, 60000);

        return ({accountsAdded: addNewAccounts.accountsAdded});


    }catch (err){

        return ({errorMsg: 'No account inserted'})
    }
};




let fetchTransactions = async (noOfDays, accessToken, timeOut) => {
    try{
        return setTimeout(() => transactionController.fetchAndInsert(noOfDays, accessToken), timeOut);

    }catch(err){
        console.error(err);
    }
};


let insertNewAccounts = async(publicToken) => {

    try {

        let allAccounts = await bankService.getInitialAccountInfo(publicToken);
        let insertCount = 0;

        if(allAccounts.length > 0){

           for(let i = 0; i < allAccounts.length; i++){
               try {
                   let account = allAccounts[i];
                   let accountInfo = await findAccount(account.accountNumber, account.bankName);
                   console.log("account info", accountInfo.length);
                   if(accountInfo.length === 0){
                       try{
                           await insertAccount(account);
                           insertCount ++;
                       }catch (err){
                           console.error(err);
                       }
                   }
               }catch (err){
                   console.error(err);
               }
           }

           return ({accountsAdded: insertCount, accessToken: allAccounts[0].accessToken});


        }else {
            return ({errorMsg: "No accounts found"})
        }


    }catch (err){

        return ({errorMsg: 'No account inserted'})
    }
};


module.exports = {insertAccount, findAll, insertNewAccounts, totalCount, fetchTransactions, addNewAccountData};