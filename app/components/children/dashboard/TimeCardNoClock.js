import React from "react";
import {IconButton, FontIcon} from 'material-ui';

//import helper file
import Helpers from '../../utils/Helpers.js';
import GeoLocation from '../../utils/Geolocation.js';

class Timecard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeCard :{},
		};
	}

	componentWillMount() {
		//Get the data from database from jobs table and schedule table
		Helpers._getOneSchedule(this.props.scheduleId)
			.then(function(newSchedule){
				//timeCard holds all the information needed to create a time card.
				this.setState({timeCard : newSchedule.data});
				//this.setState({distance : GeoLocation._getDistance(this.state.timeCard.jobLng, this.state.timeCard.jobLat)});
		}.bind(this))


	}//componentWillMount	

	render() {
		//console.log(this.state.timeCard);
		return(
		<div>
			<b> {this.state.timeCard.jobName} </b>
			<div> {this.state.timeCard.startTime} to {this.state.timeCard.endTime} </div>
			<IconButton iconClassName="material-icons" tooltip="Clock In" 
					    tooltipPosition="top-center" disabled={true} >alarm</IconButton>
			<IconButton iconClassName="material-icons" tooltip="Clock Out" 
					    tooltipPosition="top-center" disabled={true} >alarm_off</IconButton>
			
		</div>
		);
	}
}
export default Timecard;