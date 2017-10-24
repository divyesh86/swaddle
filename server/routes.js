let transactionController = require("../server/controllers/transactionController");
let userController = require("../server/controllers/userController");
let userCommentsController = require("../server/controllers/userCommentsController");

module.exports = function(app, passport) {

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
       // res.render('index.ejs');
    });

    // postNote: async function(note) {
    //     return await axiosInstance.post("/postComment", {note});
    // },
    //
    // login: async function(email, password) {
    //     return await axiosInstance.post("/login", {email, password});
    // },
    //
    // signup: async function(email, password, name, phone) {
    //     let result = await axiosInstance.post("/signup", {email, password, name, phone});
    //     console.log(result);
    //     return result;
    // },
    //
    //
    // //Get transactions
    // items: async function() {
    //     return await axiosInstance.get("/getTransactions");
    // }


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

    app.get('/fetchLatest', async function (req, res) {

        //console.log(req.isAuthenticated());
        let transactions = await transactionController.fetchLastTransaction();
        res.json({results: transactions});

    });

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

    app.post('/get_access_token', function(request, response, next) {
        PUBLIC_TOKEN = request.body.public_token;
        console.log('Public Token: '+PUBLIC_TOKEN);
        client.exchangePublicToken(PUBLIC_TOKEN, function(error, tokenResponse) {
            if (error != null) {
                var msg = 'Could not exchange public_token!';
                console.log(msg + '\n' + error);
                return response.json({
                    error: msg
                });
            }
            ACCESS_TOKEN = tokenResponse.access_token;
            ITEM_ID = tokenResponse.item_id;
            console.log('Access Token: ' + ACCESS_TOKEN);
            console.log('Item ID: ' + ITEM_ID);
            response.json({
                'error': false
            });
        });
    });

    app.get('/accounts', function(request, response, next) {
        // Retrieve high-level account information and account and routing numbers
        // for each account associated with the Item.
        client.getAuth(ACCESS_TOKEN, function(error, authResponse) {
            if (error != null) {
                var msg = 'Unable to pull accounts from the Plaid API.';
                console.log(msg + '\n' + error);
                return response.json({
                    error: msg
                });
            }

            console.log(authResponse.accounts);
            response.json({
                error: false,
                accounts: authResponse.accounts,
                numbers: authResponse.numbers,
            });
        });
    });


};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
