import React from "react";
import Auth  from "../Auth";
import {Card, CardActions, CardHeader, CardText} from 'material-ui';

class Totals extends React.Component {
	constructor(props) {
        super(props);
	    const userData = Auth._getData();
    	this.state = { name: userData.firstName }
    }
    
    render() {
    	return ( 
	      <Card>
	        <CardHeader title={this.state.name + "'s Overview"} subtitle="" avatar="assets/images/ic_account_circle_black_24dp_2x.png" />
	        <CardText>
	          This section will display a running total for the week
	        </CardText>
	      </Card>
    	);
  	}
}

// Export the component back for use in other files
export default Totals;