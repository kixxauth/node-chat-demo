'use strict';

var connections = [];

exports.addConnection = function (socket) {
	connections.push(socket);

	socket.on('message', function (message) {
		console.log('got message: %s', message);
		connections.forEach(function (client) {
			client.emit('update', message);
		});
	});
};
