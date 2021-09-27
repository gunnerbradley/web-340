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
const mongoose = require('mongoose');
const Employee = require('./models/employees');

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

// Connecting to MongoDB
const mongoDB = 'mongodb+srv://<DBname>:<password>@cluster0.mlnw2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', () => { console.log('Application connected to MongoDB')});


//init employee data
let employee = new Employee({

    firstName: "John",
    lastName: "Doe"

});


// init server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});
