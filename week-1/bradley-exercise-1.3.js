/* 
    Title: bradley-exercise-1.3.js
    Author: Gunner Bradley
    Date: 08/14/21
    Description: Intro to Node modules
*/

const url = require("url");// Brings module into main file

const parsedURL = url.parse("https://www.example.com/profile?name=smith");

console.log(parsedURL.protocol);    //logs protocol type to console
console.log(parsedURL.host);        //logs URL host to console
console.log(parsedURL.query);       //logs paramter passed in the URL to console 