/**
 *
 * Client Applications Routes
 *
 * @type {*|exports|module.exports}
 *
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var client = require('../models/client');

/**
 *
 * Index
 *
 */
app.get('/', function (req, res, next) {

    res.send('list of client applications ');

});


/**
 *
 * Create
 *
 */
app.post('/', function (req, reply) {

    // Check model
    client.create(req, function (result) {
        console.log("client create");
        reply.json({data: result});

    });


});


/**
 *
 * Retrieve
 *
 */
app.get('/:client_id', function (req, res, next) {


    // Check model
    client.findOne(req.params.client_id, function (result) {

        console.log(result);
        res.json({data: result});

    });


    //res.send('respond with a client resource ' + req.params.client_id);
});


/**
 *
 * Delete
 *
 */
app.delete('/:client_id', function (req, res) {
    res.send('respond with a client delete ');
});

module.exports = app;
