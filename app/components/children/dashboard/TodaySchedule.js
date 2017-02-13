import React from "react";
import Auth  from "../Auth";
import { Link } from 'react-router';
import {Card, CardHeader, CardText} from 'material-ui';
import Paper from 'material-ui/Paper';
import TimeCard from "./TimeCard";
import TimeCardNoClock from "./TimeCardNoClock"
import Helpers from '../../utils/Helpers.js';

var dateFormat = require('dateformat');
var today = new Date();

//alarm, alarm on, alarm off
const iconStyle = { margin: 12 };

const style = {
  height: 150,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


class TodaySchedule extends React.Component {
	constructor(props) {
        super(props);

	    const userData = Auth._getData();

    	this.state = { 
    		name: userData.firstName,
    		today: today,
    		scheduleList:[],
    		scheduleId : 0,
    		punchedScheduleId: 0
		}

		this._handleClockIn = this._handleClockIn.bind(this);
		this._handleClockOut = this._handleClockOut.bind(this);
		
  	};

	componentWillMount() {
		//localStorage.clear();
	  	Helpers._getTodaySchedule()
	  		.then(function(userData,err){
	    		console.log("localStorage.scheduleId--------"+ localStorage.scheduleId)
	        	this.setState({scheduleList: userData.data});
	    }.bind(this));
	  	if(localStorage.scheduleId) this.setState({ punchedScheduleId: localStorage.scheduleId })
	}

 	_handleClockIn(punchedCardId, scheduleId){ 
 		console.log("_handleClockIn"+ punchedCardId);
 		localStorage.setItem("punchedCardId", punchedCardId);
 		localStorage.setItem("scheduleId", scheduleId);
		console.log("scheduleId"+localStorage.getItem("scheduleId"));

 		//mark the id that is punched
 		this.setState({ punchedScheduleId: scheduleId})

  	}


  	_handleClockOut(index, event){ 
  		localStorage.setItem("punchedCardId", 0);
 		localStorage.setItem("scheduleId", 0);

 		this.setState({ punchedScheduleId: 0});

  	}
  	
    render() {
	   	//console.log ("Today's Schedule:", this.state.scheduleList);
	   	var that = this;

    	return ( 
    	<div>
	      <Card>
	        <CardHeader title="Today's Schedule" subtitle="Below is your schedule for today" avatar="assets/images/ic_schedule_black_24dp_2x.png" />
			{/*Check to see if jobs are schedule today*/}
			{this.state.scheduleList.length == 0 ? (
		        <CardText>
		        	No jobs scheduled for today, {dateFormat(this.state.today, "dddd, mmm dd, yyyy")}
          			<p><Link to="/schedule">View Full Schedule</Link></p>
		        </CardText>

			) : (
		        <CardText>	
					{this.state.scheduleList.map(function(row, i){
						return(
							<Paper style={style} zDepth={2} key={i}>
								{!that.state.punchedScheduleId || that.state.punchedScheduleId == 0 || that.state.punchedScheduleId== row.id ? (
								<TimeCard scheduleId = {row.id} 
										  _handleClockIn ={that._handleClockIn}
										  _handleClockOut ={that._handleClockOut}/>
								) : (
								<TimeCardNoClock scheduleId = {row.id} />
								)
								}
							</Paper>  
						);
					    
					})}
				<p><Link to="/schedule">View Full Schedule</Link></p>
		        </CardText>
			) }

	      </Card>
    	</div>
    	);
  	}
}

// Export the component back for use in other files
export default TodaySchedule;