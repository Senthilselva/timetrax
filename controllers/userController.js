var express = require('express');
var bcrypt = require('bcryptjs');
var models  = require('../models');
var router  = express.Router();
var path = require('path');

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var setupPassport = require('../config/passport');

router.post('/create', function(req,res) {
  var newUser = req.body
 	var salt = bcrypt.genSaltSync(10);
  var hashedPassword = bcrypt.hashSync(newUser.password, salt);

  newUser.salt = salt;
  newUser.password= hashedPassword;

  models.User.create(newUser).then(function(){
  	}).catch(function(error) {
      console.log("error: ", error);
  })
});

router.post('/update', function(req,res) {
  var currUser = req.body

  models.User.update(currUser).then(function(){
    }).catch(function(error) {
      console.log("error: ", error);
  })
});

router.get('/login', function(req, res,error) {
  //Zeynep
  res.status(404).json('user is undefined');
});

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/user/login'}),
  function(req, res, error) {
    res.json(req.user);
  });

function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    console.log("not logged in");
    res.send('not logged in');
}

router.get('/profile', function (req, res){
  var profile = {
    role: "",
    username: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    ssn: ""
  };

  User.findOne({where: { UserId:userID} })
      .then(function(data){ 
        profile.role = data.role;
        profile.username = data.username;
        profile.firstName = data.firstName;
        profile.lastName = data.lastName;
        profile.address = data.address;
        profile.city = data.city;
        profile.state = data.state;
        profile.zip = data.zip;
        profile.phone = data.phone;
        profile.email = data.email;
        profile.ssn = data.ssn;
        res.render('editprofile', {id:userID, profile:profile});
   });
});

router.get('/user', function(req, res) {
      console.log("router get");
    });

router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

module.exports = router;