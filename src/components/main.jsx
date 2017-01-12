import React, {Component} from "react";
import { Link } from "react-router";
import Auth  from "./auth.jsx";

class Main extends Component {
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

    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">TimeTrax</a>
                            {this.state.loggedIn ? (
                              <Link to="logout">Log out</Link>
                            ) : (
                              <Link to="login">Sign in</Link>
                            )}
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {/* Change from a to Link */}
                                <li><Link to="/" activeClassName="active">Home</Link></li>
                                <li><Link to="/dashboard">Dashboard</Link> (authenticated)</li>
                                <li><Link to="/users" activeClassName="active">Users</Link></li>
                                <li><Link to="/jobs" activeClassName="active">Jobs</Link></li>
                                <li><Link to="/company" activeClassName="active">Company</Link></li>
                                <li><Link to="/register">Register</Link></li>
                                <li><Link to="/login" activeClassName="active">Login</Link></li>
                            </ul>
                        </div>
                        <div>{this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}</div>
                    </div>
                </nav>
 
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main