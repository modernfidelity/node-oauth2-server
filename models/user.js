/**
 *
 * USER MODEL
 *
 * @file
 * Provides the handlers and schema definitions for the specific model
 *
 */



// Include the mysql connection
var db = require('../datastores/mysql.js');
var bcrypt = require('bcrypt');
var uuid = require('node-uuid');



/**
 *
 * Index
 *
 * @param request
 * @param reply
 *
 *
 * @todo : err handling
 *
 */
exports.index = function (data, reply) {

    db.con.query('SELECT uuid, username, email FROM users',

        function (err, result) {

            if (err) throw err;

            //console.log('Data received from Db:\n', result);

            reply(result);

        });


};


/**
 *
 * Create a single item
 *
 * @param request
 * @param reply
 */
exports.create = function (request, reply) {


    var user = request.body;

    // Generate a salt
    var salt = bcrypt.genSaltSync(10);

    // Hash the password with the salt
    var hash = bcrypt.hashSync(user.password, salt);

    //console.log(hash + '\n');
    //console.log(uuid + '\n');

    db.con.query('INSERT INTO users (uuid, username, email, password ) VALUES (?, ?, ?, ?)', [

        uuid.v4(),
        user.username,
        user.email,
        hash


    ], function (err, results) {

        if (err) throw err;

        //console.log(user.username + ' : user created in db:\n');

        reply({status: 'ok'});

    });

};


/**
 *
 * Retrieve
 *
 * @param request
 * @param reply
 *
 *
 * @todo : err handling
 *
 */
exports.findOne = function (uuid, reply) {

    db.con.query('SELECT uuid, username, email FROM users WHERE uuid = ?',

        [uuid],

        function (err, result) {

            if (err) throw err;

            //console.log('Data received from Db:\n', result);

            reply(result);

        });


};