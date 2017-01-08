// // Include the React library
// var React = require("react");

// // Include the react-router module
// var router = require("react-router");

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// // Include the Route component for displaying individual routes
// var Route = router.Route;

// // Include the Router component to contain all our Routes
// // Here where we can pass in some configuration as props
// var Router = router.Router;

// // Include the hashHistory prop to handle routing client side without a server
// // https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
// var hashHistory = router.browserHistory;

// // Include the IndexRoute (catch-all route)
// var IndexRoute = router.IndexRoute;

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Reference the high-level components
var App = require("../components/App");
var Login = require("../components/Login");
var Signup = require("../components/Signup");
var Home = require("../components/Home");

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <MuiThemeProvider>
  <Router history={hashHistory}>
    <Route path="/" component={App}>

      <Route path="home" component={Home} />
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />

      <IndexRoute component={Home} />

    </Route>
  </Router>
  </MuiThemeProvider>
);
