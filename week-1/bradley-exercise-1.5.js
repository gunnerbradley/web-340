/* 
    Title: bradley-exercise-1.5.js
    Author: Gunner Bradley
    Date: 08/14/21
    Description: setup basic node server
*/

const http = require("http"); //includes http module

//function thats passed to client side
function processRequest(req, res) {
    const body = "Hello World, this is Gunner Bradley completing assignment 1.5!";
    const contentLength = body.length;
    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}

const s = http.createServer(processRequest); //init server
s.listen(8080) //direct server to port 8080 on local host
