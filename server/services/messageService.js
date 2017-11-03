let config = require('../config/twilio');
let twilio = require('twilio');
let twilioClient = new twilio(config.ACCOUNT_SID, config.AUTH_TOKEN);



let sendMessage = async (body, to) => {
    try{


        await twilioClient.messages.create({
            to: to,
            body: body,
            from: config.PHONE_NUMBER// From a valid Twilio number
        });

        //console.log(result);

    }catch (err){
        return ({errorMsg: err.message});
    }

};


let createMessageBody = async (transaction) => {
    try{

        return utils.convert.toString(transaction.amount, transaction.name, transaction.address, transaction.city);

    }catch (err){
        return ({errorMsg: err.message});
    }

};





module.exports = {sendMessage, createMessageBody};