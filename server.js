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

var user = require('./routes/user');
var clients = require('./routes/clients');

// Create our Express application
var app = express();

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