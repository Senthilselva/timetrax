import React from "react";
import Auth  from "../Auth";
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardText} from 'material-ui';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui'
import Helpers from '../../utils/Helpers.js';
var dateFormat = require('dateformat');
var today = new Date();

const style = { margin: 12 };

class Schedule extends React.Component {
	constructor(props) {
        super(props);
	    const userData = Auth._getData();
    	this.state = { 
    		name: userData.firstName,
    		today: today,
    		scheduleList:[]
		}
  	};

	componentWillMount() {
	  Helpers._getTodaySchedule()
	      .then(function(userData,err){
	        this.setState({scheduleList: userData.data});
	      }.bind(this));
	}

 	getScheduleClockInId(id){    
    	console.log("id=", id);
    	this.setState({clockInId:id});
	}

    render() {
	    var that =this;
    	console.log ("schedule list:", this.state.scheduleList);
	    console.log ("schedule length:", this.state.scheduleList.length);

    	return ( 
    	<div>
	      <Card>
	        <CardHeader title="Today's Schedule" subtitle="" avatar="assets/images/ic_schedule_black_24dp_2x.png" />
			{this.state.scheduleList.length == 0 ? (
		        <CardText>
		        	No jobs scheduled for today, {dateFormat(this.state.today, "dddd, mmm dd, yyyy")}
          			<p><Link to="/schedule">View Full Schedule</Link></p>
		        </CardText>

			) : (
		        <CardText>
		        	List of jobs 
					<Table selectable={true}>
					    <TableHeader adjustForCheckbox={true} displaySelectAll={false} enableSelectAll={false}>
					      <TableRow>
					        <TableHeaderColumn>Client</TableHeaderColumn>
					        <TableHeaderColumn>Date</TableHeaderColumn>
					        <TableHeaderColumn>Start</TableHeaderColumn>
					        <TableHeaderColumn>Finish</TableHeaderColumn>
					      </TableRow>
					    </TableHeader>
					    <TableBody displayRowCheckbox={false} showRowHover={true} stripedRows={false}>
					          {this.state.scheduleList.map(function(id, i){

					            return(
					              <TableRow key={i}> 
					                <TableRowColumn>{id.jobName}</TableRowColumn>
					                <TableRowColumn>{dateFormat(id.startDate, "isoDateTime")}</TableRowColumn>
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
					</Table>		        	
				    <p><Link to="/schedule">View Full Schedule</Link></p>
		        </CardText>
			) }

	      </Card>
    	</div>
    	);
  	}
}

// Export the component back for use in other files
export default Schedule;