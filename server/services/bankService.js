let axios = require('axios');
let config = require('../config/plaid');
let moment = require('moment');
let plaid = require('plaid');

let plaidClient = new plaid.Client(
    config.PLAID_CLIENT_ID,
    config.PLAID_SECRET,
    config.PLAID_PUBLIC_KEY,
    plaid.environments[config.PLAID_ENV]
);


let getInitialAccountInfo = async  (publicToken) => {
    try{
        let accountList = [];

        let accessTokenResult = await getAccessTokens(publicToken);
        //console.log("access token ", accessTokenResult);
        let accountResult = await getAccounts(accessTokenResult.access_token);
        //console.log("account ",accountResult);
        let itemResult = await getItem(accessTokenResult.access_token);
        //console.log("item ",itemResult);
        let institutionResult = await getInstitution(itemResult.item.institution_id);
        //console.log("institution ",institutionResult);


        accountResult.map(result => {
            let obj = {

                availableBalance: result.balances.available,
                currentBalance: result.balances.current,
                accountNumber : result.mask,
                accountName: result.official_name,
                accountType: result.subtype,
                bankName: institutionResult.institution.name,
                accessToken: accessTokenResult.access_token,
                itemId: accessTokenResult.item_id,
                date: Date.now()
            };
            accountList.push(obj);

        });

        //console.log(accountList);

        return accountList;






    }catch (err){
        console.error("error message >>>> "+err.message);
    }


};

let getAccessTokens = async (publicToken) => {

    try{
        return await plaidClient.exchangePublicToken(publicToken);

    } catch(err){
        console.error(err);
    }

};

let getAccounts = async (accessToken) => {
    try{

        let results =  await plaidClient.getAuth(accessToken);
        return results.accounts;

    }catch (err){
        console.log(err);
        return ({errorMsg: err.message});
    }

};

let getItem = async (accessToken) => {
    try{

        return await plaidClient.getItem(accessToken);

    }catch (err){
        return ({errorMsg: err.message});
    }

};


let getInstitution = async (institutionId) => {
    try{

        return await plaidClient.getInstitutionById(institutionId);

    }catch (err){
        return ({errorMsg: err});
    }

};

let getTransactions = async (noOfDays, accessToken) => {
    try{

        let startDate = moment().subtract(noOfDays, 'days').format('YYYY-MM-DD');
        let endDate = moment().format('YYYY-MM-DD');
        console.log("start date >>> "+ startDate);
        console.log("end date >>> "+ endDate);
        console.log(typeof accessToken);
        console.log("access token to be used >>>" + accessToken+ "<<<");
        let result =  await plaidClient.getTransactions(accessToken, startDate, endDate, {
            count: 250,
            offset: 0,
        });

        console.log(result);
        return result;

    }catch (err){
        console.log(err);
        return ({errorMsg: err.message});
    }

};


module.exports = {getTransactions, getAccessTokens, getAccounts, getItem, getInstitution, getInitialAccountInfo};