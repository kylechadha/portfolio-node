
// Application Set Up
// ----------------------------------------------
var express  = require('express');
var app      = express();
var path     = require('path');
var port     = process.env.PORT || 8080;

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');


// Express Set Up
// ----------------------------------------------
app.use(morgan('dev'));         // log every request to the console
app.use(cookieParser());        // read cookies (needed for auth)
app.use(bodyParser());          // get information from html forms
app.set('view engine', 'ejs');  // set up ejs for templating
app.set('views', __dirname + '/public/views');
app.use(express.static('public'));


// Routes
// ----------------------------------------------
require('./app/routes.js')(app);  // load our routes and pass in our app and fully configured passport


// Server
// ----------------------------------------------
app.listen(port);
console.log('The magic happens on port ' + port);
