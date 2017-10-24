// load the things we need
const mongoose = require('mongoose');

// define the schema for our user model
const userAccountSchema = mongoose.Schema({
    name : { type: String, required: true },
    userId : { type: String, required: true },
    accountNumber : { type: String, required: true },
    bank : { type: String, required: true }

});


const UserAccount = mongoose.model("UserAccount", userAccountSchema);

// create the model for users and expose it to our server
module.exports = UserAccount;
