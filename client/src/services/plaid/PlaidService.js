//import Plaid from './Plaid.js';

let axios = require('axios');
let config = require('../../config/config');

let addAccount = Plaid.create({
    clientName: 'Plaid Walkthrough Demo',
    env: 'development',
    key: config.PLAID_PUBLIC_KEY, // Replace with your public_key to test with live credentials
    product: ['auth', 'transactions'],
    selectAccount: false, // Optional – trigger the Select Account
    onLoad: function() {
        // Optional, called when Link loads
    },
    onSuccess: function(public_token, metadata) {
        // Send the public_token to your app server.
        // The metadata object contains info about the institution the
        // user selected and the account ID, if `selectAccount` is enabled.
        axios.post('/get_access_token', {
            public_token: public_token,
        });
    },
    onExit: function(err, metadata) {
        // The user exited the Link flow.
        if (err != null) {
            // The user encountered a Plaid API error prior to exiting.
        }
        // metadata contains information about the institution
        // that the user selected and the most recent API request IDs.
        // Storing this information can be helpful for support.
    }
});

module.exports = {addAccount};