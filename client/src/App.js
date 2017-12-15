import React from "react";
import Start from "./pages/start";
import Accounts from "./pages/accounts";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () =>
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Start} />
                <Route exact path="/accounts" component={Accounts} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Home} />

            </Switch>
        </div>
    </Router>;

export default App;

