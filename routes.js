'use strict';

var sockets = require('./lib/sockets');

exports.initialize = function (app, io) {

	// Listen for new socket connections here.
	io.on('connection', function (socket) {
		sockets.addConnection(socket);
	});
};
