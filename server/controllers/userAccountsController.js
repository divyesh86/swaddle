const UserAccount = require("../models/userAccount");



let insertAccount = async(user, userAccount) => {

    try{
        return await UserAccount
            .create(
                {
                    name: user.name,
                    userId: user._id,
                    account: userAccount.accountNumber,
                    bank: userAccount.bank
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
            .find()
    }catch(err){
        return ({errorMsg: err.message})
    }

};


module.exports = {insertAccount, findAll};