/* 
    Title: bradley-exercise-2.2.js
    Author: Gunner Bradley
    Date: 08/21/21
    Description: Hello World with Express
*/

const express = require("express"); // imports express module
const http = require("http"); //imports node native http module
const app = express(); //assigns express methods to app variable


//middleware example that passes a function to the app
app.use((req, res) => {
   console.log("In comes a request to: " + req.url); //logs the url request sent by client on serverside console
   res.end("Hello World"); //send a string to the clinet window in reponse to their request
});


http.createServer(app).listen(8080); //serves application oon port 8080