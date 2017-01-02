var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(process.cwd() + '/public'));
app.use('/styles', express.static(__dirname + '/styles'))

var routes = require('./controllers/appController.js');
//var initdb = require("./db/init.js");

app.use('/', routes);
app.set('port', (process.env.PORT || 3000));

var port = process.env.PORT || 3000;
var server = app.listen(app.get('port'), function () {
    console.log("Listening on PORT %s...", port);
});