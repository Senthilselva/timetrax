import React from "react";
import Auth  from "../Auth";
import {Card, CardActions, CardHeader, CardText} from 'material-ui';

class Header extends React.Component {
	constructor(props) {
        super(props);
	    const userData = Auth._getData();
    	this.state = { name: userData.firstName }
    }
    
    render() {
    	return ( 
	      <Card>
	        <CardHeader title={this.state.name} subtitle="" avatar="assets/images/ic_account_circle_black_24dp_2x.png" />
	        <CardText>
	        </CardText>
	      </Card>
    	);
  	}
}

// Export the component back for use in other files
export default Header;