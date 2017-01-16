import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


//import helper file
import Helpers from '../../utils/Helpers.js';

class ScheduleTable extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    scheduleTables:[]
  };

}//Constructor

componentWillMount() {
  console.log(Helpers)
  Helpers._getSchedule()
      .then(function(userData,err){
        //console.log(JSON.stringify(userData));
        this.setState({scheduleTables:userData.data});
        //console.log(JSON.stringify(this.state.scheduleTables));
      }.bind(this));
}//componentWillMount

render(){
  console.log((this.state.scheduleTables));

    return (
       <table>
        <tr>
          <th>Client</th>
          <th>Date</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Address</th>
          <th></th>
        </tr>
    

          {this.state.scheduleTables.map(function(id,i){
            return(
          <tr key={i}> 
            <td>{id.jobName}</td>
            <td>{id.startDate}</td>
            <td>{id.startTime}</td>
            <td>{id.endTime}</td>
            <td>{id.jobAdd}, {id.jobCity}, {id.jobState}, {id.jobZip} </td>
          </tr>
            );
          })}
        </table>
    );
}

}//class defination


// Export the componen back for use in other files
export default ScheduleTable;
