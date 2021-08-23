/* 
    Title: bradley-exercise-2.4.js
    Author: Gunner Bradley
    Date: 08/21/21
    Description: EJS-Views dynamicly serving HTML
*/
const http = require("http");
const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine
app.get("/", (req, res) => {
    res.render("index", {
        firstName: "Gunner",
        lastName: "Bradley",
        address: "Chicago, IL - 60625"
   });
});

http.createServer(app).listen(8080, function() {
    console.log("EJS-Views app started on port 8080.");
});