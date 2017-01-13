var express = require("express");
var session = require('express-session'); 
var methodOverride = require('method-override'); // for deletes in express
var debug = require('debug')('express-example');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser'); // for working with cookies
var compression = require('compression')
var favicon = require('serve-favicon');
var logger = require('morgan');
var path = require('path')
var passport = require('passport'); // pass passport for configuration
var port = process.env.PORT || 3000;

var app = express();
var setupPassport = require('./config/passport')(passport),
    flash = require('connect-flash');

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(compression());
app.use(methodOverride('_method')) // override POST to have DELETE and PUT
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// serve static assets normally
//app.use(express.static(path.join(__dirname, 'public')))
//app.use(express.static(process.cwd() + '/public'));
app.use(express.static(__dirname + '/public'))

//allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: 60000 }}));
app.use(cookieParser());

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/assets/img/favicon.ico'));

//console.log('going to initialize db');
//var initdb = require("./db/init.js");

//console.log('defining app controller');
var routes = require('./controllers/appController');
var user_controller = require('./controllers/userController');
app.use('/', routes);
app.use('/user', user_controller);

// we bring in the models we exported with index.js
var models = require("./models");

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log("[Server] running at localhost: " + port)
