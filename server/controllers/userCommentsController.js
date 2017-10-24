const UserComment = require("../models/userComment");



let insertComment = async(user, comment, transactionId) => {

    try{
        return await UserComment
            .create(
                {
                    name: user.name,
                    userId: user._id,
                    comment: comment,
                    transactionId: transactionId
                }
            );

    }catch(err){
        console.error(err);
        return ({errorMsg: err.message})
    }
};


module.exports = {insertComment};