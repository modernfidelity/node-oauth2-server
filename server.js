/**
 *
 * OAuth2 Server
 *
 * @author : Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @type {*|exports|module.exports}
 *
 */

// Load Application Deps...
var express = require('express');
var pack = require('./package');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var session = require('express-session');
var passport = require('passport');
var user = require('./routes/user');
var clients = require('./routes/clients');

// Create our Express application
var app = express();

// Set view engine to ejs
app.set('view engine', 'ejs');

// Use express session support since OAuth2orize requires it
app.use(session({
    secret: 'Super Secret Session Key',
    saveUninitialized: true,
    resave: true
}));

// Use the passport package in our application
app.use(passport.initialize());

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
    extended: true
}));

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Initial version route for testing
app.get('/', function(req, res) {
    res.json({ version: pack.version });
});

// ROUTES : Register all our routes
//app.use('/', router);
app.use('/user', user);
app.use('/clients', clients);
//app.use('/oauth2/authorize', authorize);
//app.use('/oauth2/token', token);


// Start the server
app.listen(port);

console.log('Server running on port ' + port);