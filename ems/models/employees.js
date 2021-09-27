/* 
    Title: employees.js
    Author: Gunner Bradley
    Date: 09/25/21
    Description: Mongo schema
*/ 

// Init Requirements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema
let EmployeeSchema = new Schema({
    firstName: {type: String, required: true },
    lastName: {type: String, required: true }
});

// model
let Employee = mongoose.model("Employee", EmployeeSchema);

// Export model
module.exports = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;