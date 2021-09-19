/* 
    Title: bradley-mongoose.js
    Author: Gunner Bradley
    Date: 09/18/21
    Description: Mongoose basics
*/

// set requirements
const express = require("express");
const http = require("http");
const morgan = require("morgan");
const path = require("path");
const mongoose = require("mongoose")

let app = express();

const mongoDB = "mLab connection string";

mongoose.connect(mongoDB, {

    useMongoClient: true

});

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", () => {

    console.log("Application connected to mLab MongoDB instance");

});



app.get("/", (req, res) => {
    console.log('connected')
});

http.createServer(app).listen(8080, () => {
    console.log("Application started on port 8080!");
});