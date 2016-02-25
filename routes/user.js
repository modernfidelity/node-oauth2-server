/**
 *
 * User Routes
 *
 * @type {*|exports|module.exports}
 *
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var user = require('../models/user');

// GET User listing.
app.get('/', function (req, res, next) {

    res.send('list of users');
});


/**
 *
 * GET User
 *
 */
app.get('/:user_id', function (req, res, next) {

    // Check model
    user.findOne(req.params.user_id, function (result) {
        console.log(result);
        res.json({data: result});
    });
    //res.send('respond with a user resource ' + req.params.user_id);

});


/**
 *
 * Create User
 *
 */
app.post('/', function (userData, res) {

    // Check model
    user.create(userData, function (result) {

        console.log(result);

        res.json({data: result});

    });

    
});

/**
 *
 * Delete User
 *
 */
app.delete('/:user_id', function (req, res) {
    res.send('respond with a user delete ');
});

//
module.exports = app;
