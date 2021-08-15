const http = require("http");

function processRequest(req, res) {
    const body = "Hello World, this is Gunner Bradley completing assignment 1.5!";
    const contentLength = body.length;
    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}

const s = http.createServer(processRequest);
s.listen(8080)