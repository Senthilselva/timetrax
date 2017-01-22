import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';

//import helper file
import Helpers from '../../utils/Helpers.js';

const style = {
  margin: 12,
};



class ScheduleTable extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    showCheckboxes:false,
    showRowHover:false,
    stripedRows:false,
    scheduleTables:[]
  };

  this._onClockIn = this._onClockIn.bind(this)
}//Constructor

componentWillMount() {
  Helpers._getTodaySchedule()
      .then(function(userData,err){
        this.setState({scheduleTables:userData.data});
      }.bind(this));
}//componentWillMount

_onClockIn(event) {
  //console.log("on Clock In   " + JSON.stringify(event.target.value));
  this.props._getScheduleClockInId(event.target.value);
}

render(){
    var that =this;
    console.log ("schedule:", this.state.scheduleTables);
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
          {this.state.scheduleTables.map(function(id,i){

            return(
              <TableRow key={i}> 
                <TableRowColumn>{id.jobName}</TableRowColumn>
                <TableRowColumn>{moment(id.startDate).format('L')}</TableRowColumn>
                <TableRowColumn>{id.startTime}</TableRowColumn>
                <TableRowColumn>{id.endTime}</TableRowColumn>
                <TableRowColumn>{id.jobAdd}, {id.jobCity}, {id.jobState}, {id.jobZip} </TableRowColumn>
                <TableRowColumn>
                <RaisedButton label="Clock-in" value={id.id} onClick={that._onClockIn} 
                style={style}/> </TableRowColumn>
              </TableRow>
            );
          })}
          </TableBody>
        </table>
    );
}

}//class defination


// Export the componen back for use in other files
export default ScheduleTable;