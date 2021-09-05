/*
Title: Exercise 4.4
Author: Gunner Bradley
Date: 08/28/21
Description: CRUD example
*/

// set requirements
const express = require("express");
const http = require("http");

let app = express();//init app

app.set("port", process.env.PORT || 3000); //use default port of 3000


app.get("/", (req, res) => {
  res.send("API invoked as an HTTP GET request.");
});

app.put("/", (req, res) => {
  res.send("API invoked as an HTTP PUT request.");
});

app.post("/", (req, res) => {
  res.send("API invoked as an HTTP POST request");
});

app.delete("/", (req, res) => {
  res.send("API invoked as an HTTP DELETE request");
});


http.createServer(app).listen(app.get("port"), () => {
  console.log(`Application started and listening on port ${app.get("port")}`);
});
