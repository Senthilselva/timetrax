import React from "react";
import { Link } from 'react-router'
import Auth  from "./children/Auth";
import Header from "./children/Header";


//define class
class Main extends React.Component {

constructor(props) {
	super(props);
  this.state = {
    loggedIn : Auth._loggedIn()
  }
  this._handleClick = this._handleClick.bind(this);
  this._setLogin = this._setLogin.bind(this);
  this._updateAuth = this._updateAuth.bind(this);
}

  _updateAuth(loggedIn) {
    this.setState({
      loggedIn 
    })
  }

  componentWillMount() {
    Auth._onChange = this._updateAuth
    Auth._login()
  }

  _handleClick(event) {
    console.log(this.state.loggedIn);
    event.preventDefault();
    Auth._logOut();
    //this.setState(loggedIn,false);
  }

  _setLogin(newLog){
    console.log(newLog);
  }

 render() {
    return (

      <div className="mainContainer">
          <Header />
      </div>
      
    );
  }
}

// Export the componen back for use in other files
export default Main;



