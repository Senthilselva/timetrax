module.exports = {
	_loggedIn(){
		if(localStorage.token)
			return localStorage.token;
		else
			var login= {}
			login.authenticated = false;
			return login;
	},

	_setToken(userData){
		localStorage.token = userData;
		//localStorage.token.authenticated = true;
		console.log(localStorage.token);
	},

	_logOut(){
		delete localStorage.token;
	}
}