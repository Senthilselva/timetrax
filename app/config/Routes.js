import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,  browserHistory, IndexRoute } from 'react-router'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import  Dashboard  from "../components/children/Dashboard";
import  Home  from "../components/children/Home";
import  Login from "../components/children/Login";
import  Logout from "../components/children/Logout";
import  Main from "../components/Main";
import  Profile from "../components/children/admin/Profile";
import  Register  from "../components/children/admin/Register";
import  Schedule  from "../components/children/Schedule";
import  Timesheet  from "../components/children/Timesheet";

//helper to requireLogin
import Auth from "../components/children/Auth";

console.log("Routes.js");

function requireAuth(nextState, replace) {
  if (!Auth._loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

// Export the Routes
module.exports = (

 <MuiThemeProvider>
  <Router history={browserHistory}>
    <Route path="/" component={ Main }>
      <Route path="/dashboard" component={Dashboard} onEnter={requireAuth} />
      <Route path="/home" component={Home} />
      <Route path="/login" component= { Login } />
      <Route path="/logout" component= { Logout } />
      <Route path="/profile" component={Profile} onEnter={requireAuth} />
      <Route path="/register" component={ Register } />
      <Route path="/schedule" component={Schedule} onEnter={requireAuth} />
      <Route path="/timesheet" component={Timesheet} onEnter={requireAuth} />
      {/* If user selects any other path... we get the Info Route */}
       <IndexRoute component={ Home } />
    </Route>
  </Router>
</MuiThemeProvider>
);

