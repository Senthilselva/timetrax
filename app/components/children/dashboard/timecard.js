import React from "react";
import {IconButton, FontIcon} from 'material-ui';
import CircularProgress from 'material-ui/CircularProgress';
import Stopwatch from "./Stopwatch.js"
//import helper file
import Helpers from '../../utils/Helpers.js';
import GeoLocation from '../../utils/Geolocation.js';

if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}

class Timecard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeCard :{},
			newCard : {},
			isClocked : false
		};
		this._onClockOut = this._onClockOut.bind(this);
		this._onClockIn = this._onClockIn.bind(this);
		this._findDistance =this._findDistance.bind(this);
	}

	_onClockIn(){
		//check the geolocation
		var geo=navigator.geolocation;
  		if (!geo) {
        	alert("Geolocation is not supported by this browser.");
  		} else {
  			var that = this
        	geo.getCurrentPosition(function(position){
        		var lon2 = position.coords.longitude;
        		var lat2 = position.coords.latitude;
        		var distance = this._findDistance(lon2,lat2);

       			//check condition
        		if(distance > 10){
        			alert("You are not at the location to ClockIn");
        		} else {
        			//write to the database
        			var newCard = {};
				  	newCard.JobId= this.state.timeCard.JobId;
					newCard.UserId= this.state.timeCard.UserId;
					newCard.clockIn = Date.now();
        			//update localstorage
        			localStorage.setItem("clockIn" , newCard.clockIn);
					console.log(JSON.stringify(newCard));
					Helpers._createTimecard(newCard)
			 		.then(function(newdata){
        				this.setState({ newCardId : newdata.data.id});
        				this.setState({ isClocked : true });
			 			//inform Parent
			 			this.props._handleClockIn(newdata.data.id, this.props.scheduleId);	
        			}.bind(this));


        		}
        	}.bind(this));
        }
	}//endclockIn

	//find distance

	_findDistance(lon2,lat2){
		var lon1 =this.state.timeCard.jobLng;
  		var lat1 = this.state.timeCard.jobLat;
  		// ---------------to find the distance between-----------------------

        var R = 6371; // Radius of the earth in km

  		var dLat = (lat2-lat1).toRad();  // Javascript functions in radians
  		var dLon = (lon2-lon1).toRad(); 
  		var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
        Math.sin(dLon/2) * Math.sin(dLon/2); 
  
  		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  		var d = R * c; // Distance in km
  		d = d*0.621

  		return(Math.floor(d));
  			
	}


	componentWillMount() {
		//Get the data from database from jobs table and schedule table
		Helpers._getOneSchedule(this.props.scheduleId)
			.then(function(newSchedule){
			
			//timeCard holds all the information needed to create a time card.
			this.setState({timeCard : newSchedule.data});

			if(localStorage.scheduleId == this.props.scheduleId){
				var cardDataId = localStorage.getItem("punchedCardId");
				//console.log(JSON.stringify(cardDataId));
				this.setState({ newCardId : cardDataId});
	       		this.setState({ isClocked : true });
	       		this.setState({timeCard : newSchedule.data});
			}
				
		}.bind(this));

	}//componentWillMount	this.props.scheduleId


	_onClockOut(){
		console.log("_onClockOut :" + JSON.stringify(this.state.newCard));
		var clockOutTime = Date.now(); 
		//update database	
		this.setState({ isClocked : false })
    	Helpers._updateTimecard(this.state.newCardId, clockOutTime)
			.then(function(data,err){
			//inform Parent
			this.props._handleClockOut(this.props.scheduleId);
		}.bind(this));		
	}

	render() {
		var that = this;
		//console.log(this.state.timeCard);
		return(
		<div>
			<b> {this.state.timeCard.jobName} </b>
			<div> {this.state.timeCard.startTime} to {this.state.timeCard.endTime} </div>
			<IconButton onClick={this._onClockIn.bind(this, this.state.timeCard.id)} 
					            iconClassName="material-icons" tooltip="Clock In" 
					            tooltipPosition="top-center" disabled={this.state.isClocked} >alarm</IconButton>
			<IconButton onClick={this._onClockOut.bind(this, this.state.timeCard.id)} 
					            iconClassName="material-icons" tooltip="Clock Out" 
					            tooltipPosition="top-center" disabled={!this.state.isClocked} >alarm_off</IconButton>
			<div>
			{this.state.isClocked ? (
				<div>
					<Stopwatch />
					<CircularProgress size={20} thickness={3} />
				</div>
			) : (
				<div> </div>
			)}
			</div>
		</div>
		);
	}
}
export default Timecard;