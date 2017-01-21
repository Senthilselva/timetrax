import Helpers from "../utils/Helpers";

module.exports = {
	
	_login(email, password, cb) {
  	cb = arguments[arguments.length - 1]

    if (localStorage.token) {
    	if (cb) cb(true)
      	this._onChange(true)
      return
    }
    Helpers._checkLogin(email,password)
      .then(function(userData,err){
        if(!err){
          //if the user exists set the token
        	this._setToken(userData,password)
          if (cb) cb(true)
        	  this._onChange(true)
      	} else {
          console.log("error"+ err)
          if (cb) cb(false)
            this._onChange(false)
      	}
    }.bind(this));
	},

	_loggedIn() {
    return !!localStorage.token
  },

  //sets the local token
	_setToken(userData){
		localStorage.token = Math.random().toString(36).substring(7);
    localStorage.setItem("userName",userData.data.username);
    localStorage.setItem("firstName",userData.data.firstname);
		localStorage.setItem("lastName",userData.data.lastname);
	},

	_logout(cb) {
    	delete localStorage.token;
		  localStorage.clear();
    	if (cb) cb()
    	this._onChange(false)
  	},

  _getToken() {
  	return localStorage.token;
  },

  _getData() {
    return localStorage;
  },
  
  _onChange() {}	
}