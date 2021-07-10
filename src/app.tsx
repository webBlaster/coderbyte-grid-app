import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

const App = () => {
  let isAuthenticated = useSelector(
    (state: RootStateOrAny) => state.auth.isAuthenticated
  );
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route exact path="/dashboard">
          {isAuthenticated ? <Dashboard /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
