import React from "react";

//import helper file
import Helpers from '../../utils/Helpers.js';

class Timecard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tCard :{},
			cardId:0,
			yourEndTime:null,
			yourStartTime:Date.now()
		};
		this._onClockOut = this._onClockOut.bind(this);
	}

	_onClockOut(){
		console.log("_onClockOut");
		console.log("Card Id "+ this.state.cardId)
		this.setState({yourEndTime : Date.now()})
		console.log("endTime "+ this.state.yourEndTime)
		//update database
		
	}

	//wrote to see if clocked out then try to reomve the button 
	componentDidUpdate(){
		console.log("componentDidUpdate  "+this.state.yourEndTime);
		//If end date is updated then update database
		if(this.state.yourEndTime != null ) {
			Helpers._updateTimecard(this.state.cardId, this.state.yourEndTime)
				.then(function(data,err){
			console.log(JSON.stringify(data));
			})
		}
	}


	componentWillMount() {
		console.log("componentWillMount");
		//var vTimecard = Helpers._getOneSchedule(this.props.clockInId);
		Helpers._getOneSchedule(this.props.clockInId)
			.then(function(newSchedule){

			 	var newTimeSheet = {};
			 	newTimeSheet.JobId= newSchedule.data.JobId;
			 	newTimeSheet.UserId= newSchedule.data.UserId;
			 	
				newTimeSheet.clockIn = Date.now();
				Helpers._createTimecard(newTimeSheet)
					.then(function(newdata){
						console.log("newSchedule :"+ JSON.stringify(newSchedule));
						console.log("New Data :"+ JSON.stringify(newdata));
						

						console.log("back from helper in componentWillMount "
							+ JSON.stringify(this.state.tCard));
						this.setState({tCard : newSchedule.data});
						this.setState({ cardId : newdata.data.id});
						this.setState({ yourStartTime : Date.now()});
						
						console.log("Card Id "+ this.state.cardId)
						
						//console.log("after set state in componentWillMount "+ JSON.stringify(vTimecard))
			 		}.bind(this));
			
      	}.bind(this));
	}//componentWillMount	

	render() {
	
		return(
		<div>
			<h1> Timsheets </h1>
			<p> { this.props.clockInId } </p>
			<p> Name: {this.state.tCard.firstname} </p>
			<p> Job: {this.state.tCard.jobname} </p>

			<p> Started On: {moment(this.state.yourStartTime).format('L')}</p>
			<p> Started At: {moment(this.state.yourStartTime).format('LT')}</p>

			{this.state.yourEndTime == null ? (
              <button type="button" onClick={this._onClockOut}>Clock-out</button>
            ) : (
              <p> Logged out at {moment(this.state.yourEndTime).format('LT')} </p>
            )}
		</div>
		);
	}
}
export default Timecard;