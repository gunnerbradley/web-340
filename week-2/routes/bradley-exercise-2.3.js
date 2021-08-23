/* 
    Title: bradley-exercise-2.3.js
    Author: Gunner Bradley
    Date: 08/21/21
    Description: node routing examples
*/

const express = require("express"); // imports express module
const http = require("http"); //imports node native http module
const app = express(); //assigns express methods to app variable


app.get("/", (req, res) => { //response to URL get request atroot
    res.end("Welcome to the homepage!");
});

app.get("/about", (req, res) =>{ //response to URL get request at about endpoint
    res.end("Welcome to the about page!");
});

app.get("/contact", (req, res) => {//response to URL get request at contact endpoint
    res.end("Welcome to the contact page!");
});

app.use((req, res) => { //repsone if the requested page isn't found
    res.statusCode = 404;
    res.end("404!");
});

http.createServer(app).listen(8080); //serves application oon port 8080
