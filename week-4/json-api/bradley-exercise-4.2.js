/*
Title: Exercise 4.3
Author: Gunner Bradley
Date: 08/28/21
Description: Basic JSON API example
*/

// set requirements
const express = require("express");
const http = require("http");

let app = express();


//handles get request with a productID parameter
app.get("/",  (req, res) => {

    let date = new Date(); //setup for JSON date var
    let options = {
        weekday: "short",
        year: "numeric",
        month: "2-digit",
        day: "numeric"
    };

    //JSON sent to client
    res.json({
        city: "Bellevue",
        state: "NE",
        date: date.toLocaleDateString("en", options)
    });
});

// init localhost server
http.createServer(app).listen(8080, () => {
    console.log("Application started on port 8080");
});
