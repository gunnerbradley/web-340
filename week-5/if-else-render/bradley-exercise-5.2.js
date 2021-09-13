/* 
    Title: bradley-exercise-5.2.js
    Author: Gunner Bradley
    Date: 09/12/21
    Description: Using if-else EJS view templates
*/

// set requirements
const express = require("express");
const http = require("http");
const path = require("path");

let app = express();

app.set("views", path.resolve(__dirname, "views")); // Direct app to views folder
app.set("view engine", "ejs"); // Tell app to use EJS

const n = [
  "Adam",
  "Barry",
  "Candice",
  "Darla"
];

app.get("/", (req, res) => {
    res.render("index", {
        names: n
    })
});
http.createServer(app).listen(8080, () => {
    console.log("Application started on port 8080!");
});