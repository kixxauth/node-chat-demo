var http = require('http');

exports.create = function () {
	return http.createServer(handler)
};

function handler (req, res) {
	res.writeHead(200);
	res.end('pong');
}
