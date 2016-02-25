/**
 *
 *
 *
 * @type {*|exports|module.exports}
 */


var express = require('express');
var router = express.Router();
var Pack = require('../package');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    version: Pack.version
  });
});

module.exports = router;
