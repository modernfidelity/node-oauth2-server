/**
 *
 * CLIENT (APPLICATION) MODEL
 *
 * @file
 * Provides the handlers and schema definitions for the specific model
 *
 *
 * id, name, secret, user_id
 *
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
exports.create = function (data, reply) {


    console.log(data.body);

    var client = data.body;

    // Generate a salt
    var salt = bcrypt.genSaltSync(10);
    //
    //// Hash the password with the salt
    var hash = bcrypt.hashSync(client.name, salt);


    //
    //console.log(hash + '\n');
    //console.log(uuid + '\n');
    //
    db.con.query('INSERT INTO clients (id, name, secret, user_id) VALUES (?, ?, ?, ?)', [

        client.id,
        client.name,
        hash, // secret
        client.user_id,

    ], function (err, results) {

        if (err) throw err;

        console.log('client created in db:\n');

        reply({
            status: 'ok'

        });

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

    db.con.query('SELECT id, name, secret FROM clients WHERE id = ?',

        [id],

        function (err, result) {

            if (err) throw err;

            //console.log('Data received from Db:\n', result);

            reply(result);

        });


};