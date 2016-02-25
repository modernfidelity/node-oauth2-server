
//// Define our client schema
//var ClientSchema = new mongoose.Schema({
//  name: { type: String, unique: true, required: true },
//  id: { type: String, required: true },
//  secret: { type: String, required: true },
//  userId: { type: String, required: true }
//});


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('authorize respond with a resource');
});

module.exports = router;
