import React from "react";

//import helper file
import Helpers from '../../utils/Helpers.js';

class Timecard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeCard :{},

			yourEndTime:Date.now(),
			yourStartTime:Date.now(),
			jobId:0,
			userId:0
		};
		this._onClockOut = this._onClockOut.bind(this);
	}

	_onClockOut(){
		console.log("_onClockOut");
		console.log("User Id "+ this.state.userId)
		console.log("Job Id "+ this.state.jobId)
		this.setState({endTime : Date.now()})
		console.log("endTime "+ this.state.endTime)
		Helpers._updateTimecard(this.state.userId,this.state.jobId,this.state.endTime)
		.then(function(data,err){
			console.log(JSON.stringify(data));
		})
	}
	componentWillMount() {
		console.log("componentWillMount");
		//var vTimecard = Helpers._getOneSchedule(this.props.clockInId);
		Helpers._getOneSchedule(this.props.clockInId)
			.then(function(newSchedule){
				//console.log("llllllllllllllllllllllllll" + JSON.stringify(newSchedule));
			 	var newTimeSheet = {};
			 	newTimeSheet.JobId= newSchedule.data.JobId;
			 	newTimeSheet.UserId= newSchedule.data.UserId;
			 	
				newTimeSheet.clockIn = Date.now();
				Helpers._createTimecard(newTimeSheet)
					.then(function(newdata){
						//console.log("newSchedule :"+ JSON.stringify(newSchedule));
						//console.log("New Data :"+ JSON.stringify(newdata));
						this.setState({timeCard : newSchedule.data});
						console.log("back from helper in componentWillMount "
							+ JSON.stringify(this.state.timeCard));
						
						this.setState({ yourStartTime : Date.now()});
						
						//console.log("after set state in componentWillMount "+ JSON.stringify(vTimecard))
			 		}.bind(this));
			
      	}.bind(this));
	}//componentWillMount	

	render() {
	
		return(
		<div>
			<h1> Timsheets </h1>
			<p> { this.props.clockInId } </p>
			<p> Name: {this.state.timeCard.firstname} </p>
			<p> Job: {this.state.timeCard.jobname} </p>
			<p> Started At: {this.state.yourStartTime}</p>
			<button type="button" onClick={this._onClockOut}>Clock-out</button>
        
		</div>
		);
	}
}
export default Timecard;