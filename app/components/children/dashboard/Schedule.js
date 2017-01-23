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
	  Helpers._getTodaySchedule()
	  	.then(function(userData,err){
	        this.setState({scheduleList: userData.data});
	    }.bind(this));
	}

 	handleClockIn(index, event){ 
 		event.preventDefault();
 		console.log("Clock In event : "+ event)
    	console.log("Clock In index  : " + index);
    	Helpers._getOneSchedule(index)
			.then(function(newSchedule){
				console.log(newSchedule);
			 	var newTimeSheet = {};
			 	newTimeSheet.JobId= newSchedule.data.JobId;
			 	newTimeSheet.UserId= newSchedule.data.UserId;
				newTimeSheet.clockIn = Date.now();

				Helpers._createTimecard(newTimeSheet)
					.then(function(newdata){
						this.setState({tCard : newSchedule.data});
						this.setState({ cardId : newdata.data.id});
						this.setState({ yourStartTime : Date.now()});
						//console.log("after set state in componentWillMount "+ JSON.stringify(vTimecard))
			 		}.bind(this));
			
      	}.bind(this));
  	}

    render() {
	   	console.log ("Today's Schedule:", this.state.scheduleList);
	   	var that = this;
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
										<IconButton onClick={that.handleClockIn.bind(that, row.id)} iconClassName="material-icons" tooltip="Clock In" tooltipPosition="top-center" >alarm</IconButton>
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