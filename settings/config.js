/**
 *
 * API SETTINGS
 *
 * @file This file contains all the config / settings for the application
 *
 */

"use strict";

module.exports = function() {

    var settings = {

        // Single items based on ENV_VARS
        dynamodb: {
            'host'      : 'localhost', //process.env.MYSQL_HOST
        },

        cassandra: {
            'host'      : 'localhost',      //process.env.MYSQL_HOST
            'database'  : 'dev_node_api',   //process.env.MYSQL_DATABASE
            'username'  : 'root',           //process.env.MYSQL_USERNAME
            'password'  : 'root'            //process.env.MYSQL_PASSWORD
        },

        mysql: {
            'host'      : 'localhost',      //process.env.MYSQL_HOST
            'database'  : 'node_oauth2',   //process.env.MYSQL_DATABASE
            'username'  : 'root',           //process.env.MYSQL_USERNAME
            'password'  : 'root',           //process.env.MYSQL_PASSWORD,
            'multipleStatements' : true,


        }

    };

    return settings;

}();