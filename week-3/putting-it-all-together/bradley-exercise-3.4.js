/*
Title: Exercise 3.4
Author: Gunner Bradley
Date: 08/28/21
Description:  it’s time to put everything together in a simple web application.
*/

// set import requirements
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");

let app = express();

app.set("views", path.resolve(__dirname, "views")); // Direct app to views folder
app.set("view engine", "ejs"); // Tell app to use EJS
app.use(logger("short"));

//init root get request
app.get("/", (req, res) => {
   res.render("index", {
       message: "Welcome to the Home Page",
       author: "by Gunner Bradley"
   });
});

//init get req to about page
app.get("/about", (req, res) => {
   res.render("about", {
       message: "On to the About Page",
   });
});

//init get req to contact page
app.get("/contact", (req, res) => {
   res.render("contact", {
       message: "Get in touch with the Contact Page!",
   });
});

//init get req to products page
app.get("/products", (req, res) => {
   res.render("products", {
       message: "Check out  products page!",
   });
});


// init localhost server
http.createServer(app).listen(8080, () => {
    console.log("Application started on port 8080");
});

