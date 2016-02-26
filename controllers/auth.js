/**
 *
 * AUTH
 *
 * @type {Passport|*|exports|module.exports}
 *
 */


// Load required packages
var passport = require('passport'),
    BasicStrategy = require('passport-http').BasicStrategy,
    db = require('../datastores/mysql.js'),
    user = require('../models/user');

/**
 *
 */
passport.use(new BasicStrategy(

    function (email, password, callback) {

        user.validate({
                email: email,
                password: password
            }, function (err, isMatch) {


                console.log(isMatch);


            }
        );


        //User.findOne({ username: username }, function (err, user) {
        //    if (err) { return callback(err); }
        //
        //    // No user found with that username
        //    if (!user) { return callback(null, false); }
        //
        //    // Make sure the password is correct
        //    user.verifyPassword(password, function(err, isMatch) {
        //        if (err) { return callback(err); }
        //
        //        // Password did not match
        //        if (!isMatch) { return callback(null, false); }
        //
        //        // Success
        //        return callback(null, user);
        //    });
        //});


    }
));


exports.isAuthenticated = passport.authenticate('basic', {session: false});