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

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    BasicStrategy = require('passport-http').BasicStrategy,
    auth = require('../controllers/auth'),
    user = require('../models/user');


/**
 *
 *  Index Users
 *
 *  @todo : review if this required + complete ? ...useful for groupings i.e. /users/students , /users/table-tennis-players
 *
 */

//app.get('/', function (req, res) {
//
//
//    var data = {}; // @todo : add pager data
//
//    // Check model
//    user.index(data, function (result) {
//
//        res.json({data: result});
//
//    });
//
//});


app.get('/',

    passport.authenticate('basic', {failureRedirect: '/login'}),

    function (req, res) {

        // Check model
        var data = {}; // @todo : add pager data

        // Check model
        user.index(data, function (result) {

            res.json({data: result});

        });
    }
);


/**
 *
 * Create
 *
 */
//app.post('/', function (userData, res) {
//
//
//    // Check model
//    user.create(userData, function (result) {
//
//        res.json({data: result});
//
//    });
//
//});

app.post('/login',

    passport.authenticate('local', {failureRedirect: '/login'}),

    function (userData, res) {
        // Check model
        user.create(userData, function (result) {

            res.json({data: result});

        });
    }
);


/**
 *
 * Retrieve
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
 * Update
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
 * Delete
 *
 * @@todo : complete
 *
 */
app.delete('/:user_id', function (req, res) {
    res.send('respond with a user delete ');
});

//
module.exports = app;
