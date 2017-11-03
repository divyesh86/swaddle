// load the things we need
const mongoose = require('mongoose');

// define the schema for our user model
const userAccountSchema = mongoose.Schema({

    availableBalance: {type: String, required: false},
    currentBalance: {type: String, required: false},
    accountNumber: {type: String, required: true},
    accountName: {type: String, required: true},
    accountType: {type: String, required: true},
    bankName:{type: String, required: true},
    accessToken: {type: String, required: true},
    itemId : {type: String, required: true},
    date: {type: Date, required: true}

});


const UserAccount = mongoose.model("UserAccount", userAccountSchema);

// create the model for users and expose it to our server
module.exports = UserAccount;
