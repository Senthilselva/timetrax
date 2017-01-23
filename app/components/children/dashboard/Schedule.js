import React from "react";
import Auth  from "../Auth";
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardText} from 'material-ui';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui'
import {IconButton, FontIcon} from 'material-ui';
import Helpers from '../../utils/Helpers.js';
var dateFormat = require('dateformat');
var today = new Date();

//alarm, alarm on, alarm off
const iconStyles = { margin: 12 };

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
	  Helpers._getTodaySchedule()
	  	.then(function(userData,err){
	        this.setState({scheduleList: userData.data});
	    }.bind(this));
	}

 	handleClockIn(id){    
    	console.log("id=", id);
    	this.setState({clockInId:id});
	}

    render() {
	    var that =this;
    	console.log ("schedule list:", this.state.scheduleList);

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
					<Table selectable={true}>
					    <TableBody displayRowCheckbox={false} showRowHover={true} stripedRows={false}>
					          {this.state.scheduleList.map(function(row, i){

					            return(
					              <TableRow key={i}> 
					                <TableRowColumn>{row.jobName}</TableRowColumn>
					                <TableRowColumn>{row.startTime} to {row.endTime}</TableRowColumn>
					                <TableRowColumn>
										<IconButton iconClassName="material-icons" tooltip="Clock In" tooltipPosition="top-center">alarm</IconButton>
										<IconButton iconClassName="material-icons" tooltip="Clock Out" tooltipPosition="top-center" disabled={true}>alarm_off</IconButton>
					                	<Link to="timecard">
					                		<FontIcon className="material-icons md-48">alarm_on</FontIcon>
					                	</Link>
				                	</TableRowColumn>
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