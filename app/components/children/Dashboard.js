import React, {Component} from 'react';
import { Link } from 'react-router';
import Scheduletable from "./dashboard/Scheduletable.js"
import Timecard from "./dashboard/Timecard.js"
import Totals from "./dashboard/Totals.js"
import Schedule from "./dashboard/Schedule.js"
import {Card, CardActions, CardHeader, CardText} from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui';
import Auth  from "./Auth";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clockInId : 0,
      isClockOut : false
    };
    this.getScheduleClockInId = this.getScheduleClockInId.bind(this);
  }

  getScheduleClockInId(id){    
    console.log("id=", id)
    this.setState({clockInId:id});
  }
  
  render() {
   
    return (
      <div>
        <Totals />
        <Schedule />
         {this.state.clockInId == 0 ? (
            <Scheduletable _getScheduleClockInId = {this._getScheduleClockInId} /> 
          ) : (
            <Timecard clockInId = {this.state.clockInId}/>
          ) }
       
      </div>
    )
  }
}

// Export the component back for use in other files
export default Dashboard;