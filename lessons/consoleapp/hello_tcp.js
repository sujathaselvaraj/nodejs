//Load the next module to create a tcp server
var net = require('net');

// Creates a new Tcp server.
// The handler argument is automatically set as a listener for the 'connection' event
var server = net.createServer(function (socket) {
    console.log('Connection from ' + socket.remoteAddress);
    socket.end('Hello World\n');
});
var port = 7000;
server.listen(port, 'localhost');
console.log(`TCP Server listening on port ${port} at localhost.`);