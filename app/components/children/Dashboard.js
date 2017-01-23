import React, {Component} from 'react';
import { Link } from 'react-router';
import Scheduletable from "./dashboard/Scheduletable.js"
import Timecard from "./dashboard/Timecard.js"
import Overview from "./dashboard/Overview.js"
import TodaySchedule from "./dashboard/TodaySchedule.js"
import ClockPage from "./dashboard/ClockPage.js"
import {Card, CardActions, CardHeader, CardText} from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui';
import Auth  from "./Auth";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   
    return (
      <div>
        <Overview />
        <TodaySchedule />
        <ClockPage /> 
      </div>
    )
  }
}

// Export the component back for use in other files
export default Dashboard;