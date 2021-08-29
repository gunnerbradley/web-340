/*
Title: Exercise 3.2
Author: Gunner BRadley
Date: 08/28/21
Description: Exploring morgan logger modules.
*/

// set requirements
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");

let app = express();

app.set("views", path.resolve(__dirname, "views")); // Direct app to views folder
app.set("view engine", "ejs"); // Tell app to use EJS
app.use(logger("dev"));

//init root get request
app.get("/", (req, res) => {
   res.render("index", {
       message: "Welcome to the Morgan example!",
       author: "by Gunner Bradley"
   });
});

// init localhost server
http.createServer(app).listen(8080, () => {
    console.log("Application started on port 8080");
});