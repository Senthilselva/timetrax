import React, { Component } from 'react';
import { render } from 'react-dom';

// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// Reference the high-level components
import Company from './components/company.jsx'
import Home from './components/home.jsx'
import Job from './components/job.jsx'
import JobDetail from './components/job-detail.jsx'
import Login from './components/login.jsx'
import Main from './components/main.jsx'
import User from './components/user.jsx'
import UserDetail from './components/user-detail.jsx'

//import static data here
import companyData from "../db/companyData.js"
import jobData from "../db/jobData.js"
import userData from "../db/userData.js"

render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/company" component={Company} data={companyData}/>
            <Route path="/jobs" component={Job} data={jobData}/>
            <Route path="/jobs/:id" component={JobDetail} data={jobData}/>
            <Route path="/login" component={Login}/>
            <Route path="/users" component={User} data={userData}/>
            <Route path="/users/:id" component={UserDetail} data={userData}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
