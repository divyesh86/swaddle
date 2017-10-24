import React from "react";
import Start from "./pages/start";
import Accounts from "./pages/accounts";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () =>
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Start} />
                <Route exact path="/accounts" component={Accounts} />
            </Switch>
        </div>
    </Router>;

export default App;

