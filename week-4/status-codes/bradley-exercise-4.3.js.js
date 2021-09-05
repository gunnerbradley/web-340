/*
Title: Exercise 4.3
Author: Gunner Bradley
Date: 08/28/21
Description: Status code example
*/

// set requirements
const express = require("express");
const http = require("http");

let app = express();


//handles get request to root
app.get("/ok", (req, res) => {
    res.status(200);
    res.json({
        message: "Looks good to me!"
    })
});
app.get("/not-implemented", (req, res) => {
    res.status(501);
    res.json({
        error: "Uh, that's not something we do."
    })
});

// init localhost server
http.createServer(app).listen(8080, () => {
    console.log("Application started on port 8080");
});
