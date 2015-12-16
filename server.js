'use strict';

// Native Node.js modules:
var http = require('http');

// Dependencies declared in package.json:
var express = require('express');
var socketio = require('socket.io');

// Dependencies in our own application code:
var routes = require('./routes');

var app = express();
var server = http.createServer(app);
var io = socketio(server);

// Setup Express HTTP middleware
var staticServerMiddleware = express.static('public');
app.use(staticServerMiddleware);

// Setup our routes before we turn the server on.
routes.initialize(app, io);

// Turn the server on:
server.listen(8080, function () {
	var address = server.address();
	console.log('server running on %s:%s', address.address, address.port);
});
