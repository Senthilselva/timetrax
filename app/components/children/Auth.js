module.exports = {
	_loggedIn(){
		if(localStorage.token)
			return localStorage.token;
		else
			return null;
	},

	_setToken(userData){
		localStorage.token = userData;
		//localStorage.token.authenticated = true;
		console.log(localStorage.token);
	},

	_logOut(){
		console.log("Log Out")
		delete localStorage.token;
	}
}