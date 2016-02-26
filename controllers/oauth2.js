// Load required packages
var oauth2orize = require('oauth2orize')


// Create OAuth 2.0 server
var server = oauth2orize.createServer();


// Register serialialization function
server.serializeClient(function(client, callback) {
    return callback(null, client._id);
});

// Register deserialization function
server.deserializeClient(function(id, callback) {

    // @todo : update
    Client.findOne({ _id: id }, function (err, client) {
        if (err) { return callback(err); }
        return callback(null, client);
    });



});