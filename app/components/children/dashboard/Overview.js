import React from "react";
import Auth  from "../Auth";
import {Card, CardActions, CardHeader, CardText} from 'material-ui';

//import helper file
import Helpers from '../../utils/Helpers.js';

class Overview extends React.Component {
	constructor(props) {
        super(props);
	    const userData = Auth._getData();
    	this.state = { 
    		name: userData.firstName
    		// totalNumberHoursWorked : 0
    	}
    }

    render() {
    	return ( 
	      <Card>
            {/*
            <CardHeader title={this.state.name + "'s Overview"} subtitle="" avatar="assets/images/ic_account_circle_black_24dp_2x.png" />
	        */}
            <CardHeader title={this.state.name} subtitle="" avatar="assets/images/ic_account_circle_black_24dp_2x.png" />
	        <CardText> Clock in from the location! </CardText>
	      </Card>
    	);
  	}
}

// Export the component back for use in other files
export default Overview;