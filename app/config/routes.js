import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Reference the high-level components
var App = require("../components/App");
var Login = require("../components/Login");
var Signup = require("../components/Signup");
var Home = require("../components/Home");
var ClockPage = require('../components/clock/clockPage'); 

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <MuiThemeProvider>
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/clock" component={ClockPage} /> 
      <IndexRoute component={Home} />

    </Route>
  </Router>
  </MuiThemeProvider>
);
