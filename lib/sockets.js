'use strict';

var connections = [];

exports.addConnection = function (socket) {
	// Add our new socket connection to the connections pool
	connections.push(socket);

	// When we get a message from a socket, broadcast it out to all the other
	// connected clients.
	socket.on('message', function (message) {
		console.log('got message: %s', message);
		connections.forEach(function (client) {
			client.emit('update', message);
		});
	});
};
