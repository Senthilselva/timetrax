var express = require("express");
var bodyParser = require("body-parser");
var compression = require('compression')
var path = require('path')
var app = express();
var port = process.env.PORT || 3000;

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// serve static assets normally
//app.use(express.static(path.join(__dirname, 'public')))
//app.use(express.static(process.cwd() + '/public'));
app.use(express.static(__dirname + '/public'))

//console.log('going to initialize db');
//var initdb = require("./db/init.js");

//console.log('defining app controller');
//var routes = require('./controllers/appController.js');
//app.use('/', routes);
//app.set('port', (process.env.PORT || 3000));

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log("[Server] running at localhost: " + port)
