let transactionController = require("./controllers/transactionController");
let userController = require("./controllers/userController");
let userCommentsController = require("./controllers/userCommentsController");
let userAccountsController = require("./controllers/userAccountsController");
//let bankService = require("./services/bankService");

module.exports = function(app, passport) {

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
       // res.render('index.ejs');
    });



    app.get('/postComment', async function (req, res) {


        //user, comment, transactionId

        let user = req.body.user;
        let comment = req.body.comment;
        let transactionId = req.body.transactionId;

        let postCommentResult = await userCommentsController.insertComment(user, comment, transactionId);
        res.json({results: postCommentResult});

    });


    app.get('/getTransactions', async function (req, res) {

        console.log(req.isAuthenticated());

        let transactions = await transactionController.findAll();
        res.json({results: transactions});

    });

    // app.get('/fetchLatest', async function (req, res) {
    //
    //     //console.log(req.isAuthenticated());
    //     let transactions = await transactionController.fetchLastTransaction();
    //     res.json({results: transactions});
    //
    // });

    app.get('/getTransactionsFromBank', async function (req, res) {

        let noOfDays = 30;
        let transactions = await transactionController.fetchAndInsert(noOfDays);
        res.json({results: transactions});

    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


    // process the login form
    app.post('/login', passport.authenticate('local-login'), async function (req, res) {

        console.log("I am logged in");
        console.log(req.body);
        res.send({message : "Success"})

    });


    // process the signup form
    app.post('/signup', async function (req, res) {

        console.log(req.body);

        let insertResult = await userController.insertUser(req.body);

        console.log("I am signed in");
        console.log(req.body);
        res.send({message : "Success"})

    });

    app.post('/insertAccounts', async function(req, res) {

        try{
            let accountsAdded =  await userAccountsController.addNewAccountData(req.body.token);
            res.send(accountsAdded);

        }catch (err){
            res.send({errorMsg: err.message});
        }

    });

    app.get('/getAccounts', async function(req, res) {

        try{
            let accounts =  await userAccountsController.findAll();
            res.send(accounts);

        }catch (err){
            res.send({errorMsg: err.message});
        }

    });


    app.get('/getTransactions', async function(req, res) {

        try{
            let transactions =  await transactionController.findAll();
            res.send(transactions);

        }catch (err){
            res.send({errorMsg: err.message});
        }

    });

    // app.get('/accounts', function(request, response, next) {
    //     // Retrieve high-level account information and account and routing numbers
    //     // for each account associated with the Item.
    //     client.getAuth(ACCESS_TOKEN, function(error, authResponse) {
    //         if (error != null) {
    //             var msg = 'Unable to pull accounts from the Plaid API.';
    //             console.log(msg + '\n' + error);
    //             return response.json({
    //                 error: msg
    //             });
    //         }
    //
    //         console.log(authResponse.accounts);
    //         response.json({
    //             error: false,
    //             accounts: authResponse.accounts,
    //             numbers: authResponse.numbers,
    //         });
    //     });
    // });

    // app.post('/item', function(request, response, next) {
    //     // Pull the Item - this includes information about available products,
    //     // billed products, webhook information, and more.
    //     client.getItem(ACCESS_TOKEN, function(error, itemResponse) {
    //         if (error != null) {
    //             console.log(JSON.stringify(error));
    //             return response.json({
    //                 error: error
    //             });
    //         }
    //
    //         // Also pull information about the institution
    //         client.getInstitutionById(itemResponse.item.institution_id, function(err, instRes) {
    //             if (err != null) {
    //                 var msg = 'Unable to pull institution information from the Plaid API.';
    //                 console.log(msg + '\n' + error);
    //                 return response.json({
    //                     error: msg
    //                 });
    //             } else {
    //                 response.json({
    //                     item: itemResponse.item,
    //                     institution: instRes.institution,
    //                 });
    //             }
    //         });
    //     });
    // });

    // app.post('/transactions', function(request, response, next) {
    //     // Pull transactions for the Item for the last 30 days
    //     var startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
    //     var endDate = moment().format('YYYY-MM-DD');
    //     client.getTransactions(ACCESS_TOKEN, startDate, endDate, {
    //         count: 250,
    //         offset: 0,
    //     }, function(error, transactionsResponse) {
    //         if (error != null) {
    //             console.log(JSON.stringify(error));
    //             return response.json({
    //                 error: error
    //             });
    //         }
    //
    //         console.log(transactionsResponse.transactions);
    //         console.log('pulled ' + transactionsResponse.transactions.length + ' transactions');
    //         response.json(transactionsResponse);
    //     });
    // });



};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
