/*
Title: Exercise 3.3
Author: Gunner Bradley
Date: 08/28/21
Description: Understanding advanced routing techniques
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

//handles get request with a productID parameter
app.get("/:productId", (req, res) => {
    let productId = parseInt(req.params.productId, 10);
     res.render("index", {
        productId: productId,
        author: "by Gunner Bradley"
    })
});

// init localhost server
http.createServer(app).listen(8080, () => {
    console.log("Application started on port 8080");
});