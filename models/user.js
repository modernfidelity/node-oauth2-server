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
 * Create a single item
 *
 * @param request
 * @param reply
 */
exports.create = function (request, reply) {


    // Generate a salt
    var salt = bcrypt.genSaltSync(10);

    // Hash the password with the salt
    var hash = bcrypt.hashSync(request.payload.password, salt);


    console.log(hash + '\n');
    console.log(uuid + '\n');

    db.con.query('INSERT INTO users (username, mail, pass, uuid) VALUES (?, ?, ?, ?)', [

        request.payload.username,
        request.payload.email,
        hash,
        uuid.v4()


    ], function (err, results) {

        if (err) throw err;

        console.log(request.payload.username + ' : user created in db:\n');

        reply({status: 'ok'});

    });

};


/**
 *
 * Find single item
 *
 * @param request
 * @param reply
 *
 *
 * @todo : err handling
 *
 */
exports.findOne = function (id, reply) {

    db.con.query('SELECT uuid, username, email FROM user WHERE uuid = ?',

        [id],

        function (err, result) {

            if (err) throw err;

            //console.log('Data received from Db:\n', result);

            reply(result);

        });


};