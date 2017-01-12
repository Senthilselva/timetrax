import React, {Component} from "react";
import Auth  from "./auth.jsx";

class Logout extends Component {
	constructor(props) {
        super(props);
    }

    componentDidMount() {
        Auth._logout()
    }

    render() {
        return <p>You are now logged out</p>
    }
};

// Export the componen back for use in other files
export default Logout;