/*
Title: EMS
Author: Gunner Bradley
Date: 09/28/21
Description: Layouts and UI Development exercise 
*/

// set requirements
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");
const bodyParser = require('body-parser')

const app = express();//init app

//init view engines
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

app.get("/", (req, res) => {
    res.render("index", {
        title: "Home Page"
    });
});

// init server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});