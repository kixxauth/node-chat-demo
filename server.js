'use strict';

// Native Node.js modules:
var http = require('http');

// Dependencies declared in package.json:
var express = require('express');
var socketio = require('socket.io');

// Dependencies in our own application code:
var routes = require('./routes');
var vanillaServer = require('./lib/vanilla-server');

var app = express();
var server = http.createServer(app);

// Setup a separate server for socket requests only. Just as an experiment :)
var socketServer = vanillaServer.create();
var io = socketio(socketServer);

// Setup Express HTTP middleware
var staticServerMiddleware = express.static('public');
app.use(staticServerMiddleware);

// Setup our routes before we turn the server on.
routes.initialize(app, io);

// Turn the servers on:
socketServer.listen(3333, function () {
	var address = socketServer.address();
	console.log('socket server running on %s:%s', address.address, address.port);
});
server.listen(8888, function () {
	var address = server.address();
	console.log('normal server running on %s:%s', address.address, address.port);
});
