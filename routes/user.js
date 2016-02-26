/**
 *
 * USER ROUTES
 *
 * @file
 * Defines the application routes and respective handlers (models) for the component
 *
 * @type {*|exports|module.exports}
 *
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var user = require('../models/user');

/**
 *
 *  Index Users
 *
 *  @todo : review if this required + complete ? ...useful for groupings i.e. /users/students , /users/table-tennis-players
 *
 */
app.get('/', function (req, res, next) {

    res.send('list of users');
});


/**
 *
 * Create User
 *
 */
app.post('/', function (userData, res) {

    // Check model
    user.create(userData, function (result) {

        res.json({data: result});

    });

});


/**
 *
 * Retreive User
 *
 */
app.get('/:user_id', function (req, res, next) {

    // Check model
    user.findOne(req.params.user_id, function (result) {

        res.json({data: result});

    });


});


/**
 *
 * Update User
 *
 * @todo : complete
 *
 */
app.put('/:user_id', function (req, res, next) {

    // Check model
    user.findOne(req.params.user_id, function (result) {

        res.json({data: result});

    });


});

/**
 *
 * Delete User
 *
 * @@todo : complete
 *
 */
app.delete('/:user_id', function (req, res) {
    res.send('respond with a user delete ');
});

//
module.exports = app;
