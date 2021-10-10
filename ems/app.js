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
const PORT = process.env.PORT || 8080;

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

// Connecting to MongoDB
const mongoDB = MONGO_AUTH;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).catch(err => console.log(err));
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', () => { console.log('Application connected to MongoDB')});

// ROUTING
app.get("/", (req, res) => {
    res.render("index", {
        title: "Home Page",
        message: "XSS Prevention Example"

    });
});

app.get("/new", (req, res) => {
    res.render("new", {
        title: "New Employee Page",
        message: "XSS Prevention Example"

    });
});

app.get("/list", (req, res) => {
  Employee.find({}, (err, employees) => {
    if (err) throw err;

    res.render("list", {
      title: "Employees Page",
      employees: employees
    });
  });
});

app.get("/views/:queryName", (req, res) => {

    let encodedParam = req.params.queryName;
    let  decodedParam = decodeURIComponent(encodedParam);

    Employee.findOne({'employeeName': decodedParam})

    .then(employeeData => {
    if(employeeData) {
      res.render("views", {
        title: "Employee Records",
        name: employeeData.employeeName
      })


    } else {
      console.log("No document matches the provided query.");
    }
    return result;
  })
  .catch(err => console.error(`Failed to find document: ${err}`));
});


app.post("/process", (req, res) => {
    if (!req.body.employeeName) {
    res.status(404).send("Please enter first and last name.");
    return;
  }

  const employeeName = req.body.employeeName;

  //DB Schema
  const employee = new Employee({
    employeeName: employeeName,
  });

  //Save data to DB
  employee.save( (error) => {
    if (error) throw error;
     
    console.log(`Name Save: ${employeeName}` );
    res.redirect("/list");
  });
});




// init server
http.createServer(app).listen(PORT, () => {
    console.log(`Application started on port ${PORT}!`);
});

