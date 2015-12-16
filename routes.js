'use strict';

var sockets = require('./lib/sockets');

exports.initialize = function (app, io) {
	io.on('connection', function (socket) {
		sockets.addConnection(socket);
	});
};
