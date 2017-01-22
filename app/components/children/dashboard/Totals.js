import React from "react";
import Totals  from "./dashboard/Totals.js";

class Totals extends React.Component {
	constructor(props) {
        super(props);
    }
    
	componentWillMount() {
	    Helpers._getSchedule()
	      .then(function(userData,err){
	        this.setState({schedules:userData.data});
	      }.bind(this));
	}

    render() {
    	return ( 
    		<Homecard />
    		);
  	}
}

// Export the component back for use in other files
export default Totals;