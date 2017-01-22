import React from "react";
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
//auth function
import Auth  from "./Auth";
import Helpers from '../utils/Helpers.js';


class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       schedules:[],
        userData:Auth._getData()
      };
  }
  
  componentWillMount() {
    Helpers._getSchedule()
      .then(function(userData,err){
        this.setState({schedules:userData.data});
      }.bind(this));
  }//componentWillMount

  render(){
    var that =this;
    console.log ("schedule:", this.state.schedules);
    return (
       <table>
        <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
          >
        <TableRow>
          <TableHeaderColumn>Client</TableHeaderColumn>
          <TableHeaderColumn>Date</TableHeaderColumn>
          <TableHeaderColumn>Start Time</TableHeaderColumn>
          <TableHeaderColumn>End Time</TableHeaderColumn>
          <TableHeaderColumn>Address</TableHeaderColumn>
          <TableHeaderColumn></TableHeaderColumn>
        </TableRow>
         </TableHeader>
    
         <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
         >
          {this.state.schedules.map(function(id,i){

            return(
              <TableRow key={i}> 
                <TableRowColumn>{id.jobName}</TableRowColumn>
                <TableRowColumn>{moment(id.startDate).format('L')}</TableRowColumn>
                <TableRowColumn>{id.startTime}</TableRowColumn>
                <TableRowColumn>{id.endTime}</TableRowColumn>
                <TableRowColumn>{id.jobAdd}, {id.jobCity}, {id.jobState}, {id.jobZip} </TableRowColumn>
              </TableRow>
            );
          })}
          </TableBody>
        </table>
    );
  }
}

// Export the component back for use in other files
export default Schedule;