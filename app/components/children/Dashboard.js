import React from "react";
import Scheduletable from "./dashboard/Scheduletable.js"
//auth function
import Auth  from "./Auth";


class Dashboard extends React.Component {
	constructor(props) {
        super(props);
    }

    render() {
    	 const userData = Auth._getData();

    	return (
      		<div>
	        	<h1>Dashboard</h1>
	        	<p>Hello!</p>
	        	<p>{userData.firstName} {userData.lastName}</p>
            <Scheduletable />
      		</div>
    )
  	}
}

// Export the component back for use in other files
export default Dashboard;