/*
Title: EMS
Author: Gunner Bradley
Date: 09/28/21
Description: Layouts and UI Development exercise 
*/

// set requirements
require('dotenv').config()
const express = require("express");
const helmet = require("helmet");
const http = require("http");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const mongoose = require('mongoose');
const Employee = require('./models/employees');
const MONGO_AUTH = process.env.MONGO_AUTH;

const app = express();//init app

const csrfProtection = csrf({cookie: true});

//csrf Config
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use((req, res, next) => {
    let token = req.csrfToken();
    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;
    next();
});

//init view engines
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.use(helmet.xssFilter()); //init helmet middleware


// ROUTING
app.get("/", (req, res) => {
    res.render("index", {
        title: "Home Page",
        message: "XSS Prevention Example"

    });
});

app.get("/new", (req, res) => {
    res.render("new", {
        title: "Home Page",
        message: "XSS Prevention Example"

    });
});


app.post("/process", (req, res) => {
    console.log(req.body.txtName);
    res.redirect("/");
});



// Connecting to MongoDB
const mongoDB = MONGO_AUTH;
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
