import React from "react";
import Auth  from "./Auth";
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardText} from 'material-ui';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui'
import {IconButton, FontIcon} from 'material-ui';
import Helpers from '../utils/Helpers.js';
import dateFormat from "dateformat";

//var dateFormat = require('dateformat');
var today = new Date();

//alarm, alarm on, alarm off
const iconStyle = { margin: 12 };

class Schedule extends React.Component {
	constructor(props) {
        super(props);
	    const userData = Auth._getData();
    	this.state = { 
    		name: userData.firstName,
    		today: today,
    		scheduleList:[]
		}
		this.handleClockIn = this.handleClockIn.bind(this);
  	};

	componentWillMount() {
	  Helpers._getSchedule()
	  	.then(function(userData,err){
	        this.setState({scheduleList: userData.data});
	    }.bind(this));
	}

 	handleClockIn(){    
    	console.log("Clock In");
  	}

    render() {
	   	console.log ("Full Schedule:", this.state.scheduleList);

    	return ( 
    	<div>
	    <Card>
	        <CardHeader title="Full Schedule" subtitle="" avatar="assets/images/ic_schedule_black_24dp_2x.png" />
		    <CardText>
				I want the list below to be grouped by Date and then displayed in an expandable menu for each day that expands to show the jobs for that day
				<Table selectable={true}>
				    <TableBody displayRowCheckbox={false} showRowHover={true} stripedRows={false}>
				          {this.state.scheduleList.map(function(row, i){

				            return(
				              <TableRow key={i}> 
				                <TableRowColumn>{row.jobName}</TableRowColumn>
				                <TableRowColumn>{dateFormat(row.startDate, "mm/dd/yyyy")}</TableRowColumn>
				                <TableRowColumn>{row.startTime}</TableRowColumn>
				                <TableRowColumn>{row.endTime}</TableRowColumn>
				              </TableRow>
				            );
				          })}
				    </TableBody>
				</Table>				
			</CardText>	        	
	    </Card>
		<Card>
		    <CardHeader title="MM/DD/YYYY" subtitle="When expanded, shows all jobs scheduled for that date" actAsExpander={true} showExpandableButton={true} />
		    <CardText expandable={true}>
				<Table selectable={true}>
				    <TableBody displayRowCheckbox={false} showRowHover={true} stripedRows={false}>
				          {this.state.scheduleList.map(function(row, i){

				            return(
				              <TableRow key={i}> 
				                <TableRowColumn>{row.jobName}</TableRowColumn>
				                <TableRowColumn>{dateFormat(row.startDate, "mm/dd/yyyy")}</TableRowColumn>
				                <TableRowColumn>{row.startTime}</TableRowColumn>
				                <TableRowColumn>{row.endTime}</TableRowColumn>
				              </TableRow>
				            );
				          })}
				    </TableBody>
				</Table>
			</CardText>
		</Card>
    	</div>
    	);
  	}
}

// Export the component back for use in other files
export default Schedule;