var mysql = require("mysql"),
    settings = require("../settings/config.js");

// First you need to create a connection to the db
var con = mysql.createConnection({

    host: settings.mysql.host,
    user: settings.mysql.username,
    password: settings.mysql.password,
    database: settings.mysql.database

});

con.connect(function (err) {
    if (err) {
        console.log('Error connecting to mysql-db : ' + settings.mysql.host);
        return;
    }
    console.log('API : mysql-db connection established');
});

module.exports = {
    con: con
}