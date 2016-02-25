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

// GET Client listing.
app.get('/', function (req, res, next) {

  res.send('list of client applications ');

});


/**
 *
 * GET Client
 *
 */
app.get('/:client_id', function (req, res, next) {


  // Check model
  client.findOne(req.params.client_id, function(result){

    console.log(result);
    res.json({data: result});

  });



  //res.send('respond with a client resource ' + req.params.client_id);
});

// POST client
app.post('/', function (req, res) {
  res.send('respond with a client create ');
});

// DELETE client
app.delete('/:client_id', function (req, res) {
  res.send('respond with a client delete ');
});

module.exports = app;
