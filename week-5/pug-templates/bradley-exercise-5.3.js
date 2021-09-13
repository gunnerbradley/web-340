/* 
    Title: bradley-exercise-5.3.js
    Author: Gunner Bradley
    Date: 09/12/21
    Description: Using intro to Pug
*/

// set requirements
const express = require("express");
const pug = require("pug");
const http = require("http");
const path = require("path");

let app = express();

app.set("views", path.resolve(__dirname, "views"));// Direct app to views folder
app.set("view engine", "pug"); // Tell app to use Pug


app.get("/", (req, res) => {
    res.render("index", {
        message: "Welcome to my Pug based homepage!"
    });
});


http.createServer(app).listen(8080, () => {
    console.log("Application started on port 8080!");
});

