// Load HTTP module
import http from "http";

const hostname = "127.0.0.1";
const port = 8000;

// Create Http server
const server = http.createServer(function (req, res) {
	// Set the response HTTP header with HTTP status and Content type.
	res.writeHead(200, { "Content-Type": "text/plain" });

	// Send the response body "Hello World"
	res.end("Hello Dog\n");
});

server.listen(port, hostname, () => {
	// Print a log once the server starts listening.
	console.log(`Server running at http://${hostname}:${port}/`);
});
