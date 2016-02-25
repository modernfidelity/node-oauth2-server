
//// Define our client schema
//var ClientSchema = new mongoose.Schema({
//  name: { type: String, unique: true, required: true },
//  id: { type: String, required: true },
//  secret: { type: String, required: true },
//  userId: { type: String, required: true }
//});

///**
// *
// * HANDLER (controller) : User
// *
// * @param request
// * @param reply
// */
//
//
//// Include the mysql connection
//var db = require('../../datastores/mysql.js');
//var bcrypt = require('bcrypt');
//var uuid = require('node-uuid');
//
//
///**
// *
// * Create a single item
// *
// * @param request
// * @param reply
// */
//exports.create = function (request, reply) {
//
//
//  // Generate a salt
//  var salt = bcrypt.genSaltSync(10);
//
//  // Hash the password with the salt
//  var hash = bcrypt.hashSync(request.payload.password, salt);
//
//
//  console.log(hash + '\n');
//  console.log(uuid + '\n');
//
//  db.con.query('INSERT INTO users (username, mail, pass, uuid) VALUES (?, ?, ?, ?)', [
//
//    request.payload.username,
//    request.payload.email,
//    hash,
//    uuid.v4()
//
//
//  ], function (err, results) {
//
//    if (err) throw err;
//
//    console.log(request.payload.username + ' : user created in db:\n');
//
//    reply({status: 'ok'});
//
//  });
//
//
//};
//
//
///**
// *
// * Get All Users
// *
// * @todo - add pagination
// *
// * @param request
// * @param reply
// */
//exports.find = function (request, reply) {
//
//  var sql = 'SELECT * FROM users';
//  var params = [];
//
//
//  db.con.query('SELECT * FROM users', function (err, results) {
//    if (err) throw err;
//
//    console.log('Data received from Db:\n');
//
//    reply(results);
//
//  });
//
//
//};
//
//
///**
// *
// * Find single item
// *
// * @param request
// * @param reply
// */
//exports.findOne = function (request, reply) {
//
//
//  db.con.query('SELECT * FROM users WHERE uuid = ?',
//
//      [request.params.id], function (err, result) {
//
//        if (err) throw err;
//
//        console.log('Data received from Db:\n');
//
//        reply(result);
//
//      });
//
//
//};
//
//
///**
// *
// * Find users by user
// *
// * @deprecated - moving to findOne based on UUID
// *
// * @param request
// * @param reply
// */
//exports.findByUser = function (request, reply) {
//
//
//  db.con.query('SELECT * FROM users WHERE uid = ?', [request.params.uid], function (err, results) {
//    if (err) throw err;
//
//    console.log('Data received from Db:\n');
//
//    reply(results);
//
//  });
//
//
//};
//
//
///**
// *
// * Find users by UUID
// *
// * @deprecated - moving to findOne based on UUID
// *
// *
// * @param request
// * @param reply
// */
//exports.findByUserUuid = function (userId) {
//
//
//  // @todo - select specific fields not *
//  db.con.query('SELECT * FROM users WHERE uuid = ?', [userId], function (err, results) {
//    if (err) throw err;
//
//    console.log('User exists : ' + userId + '\n');
//
//    return (results);
//
//  });
//
//
//};
//
//
///**
// *
// * Delete a single item
// *
// * @param request
// * @param reply
// */
//exports.deleteById = function (request, reply) {
//
//
//  db.con.query('DELETE FROM users WHERE uuid = ? ', [
//
//    request.payload.uuid,
//
//  ], function (err, results) {
//
//    if (err) throw err;
//
//    console.log('Data saved to db:\n');
//
//    reply({status: 'ok'});
//
//  });
//
//
//};





var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('clients respond with a resource');
});

module.exports = router;
