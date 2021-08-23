/* 
    Title: bradley-exercise-2.4.js
    Author: Gunner Bradley
    Date: 08/21/21
    Description: EJS-Views dynamicly serving HTML
*/
const express = require("express"); // imports express module
const http = require("http"); //imports node native http module
const path = require("path"); //imports node native path module for navigating server/local directory
const app = express(); //assigns express methods to app variable

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine
app.get("/", (req, res) => { //responds to GET request at root dirctory with index.ejs
    res.render("index", {
        firstName: "Gunner",
        lastName: "Bradley",
        address: "Chicago, IL - 60625"
   });
});

http.createServer(app).listen(8080, () => { //serves application on port 8080
    console.log("EJS-Views app started on port 8080."); 
});