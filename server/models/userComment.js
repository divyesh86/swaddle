// load the things we need
const mongoose = require('mongoose');

// define the schema for our user model
const userCommentSchema = mongoose.Schema({
    name : { type: String, required: true },
    userId : { type: String, required: true },
    body : { type: String, required: true },
    transactionId: { type: String, required: true },
    date: { type: Date, required: true }
});


const UserComment = mongoose.model("UserComment", userCommentSchema);

// create the model for users and expose it to our server
module.exports = UserComment;
