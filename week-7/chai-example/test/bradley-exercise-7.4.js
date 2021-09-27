/* 
    Title: bradley-exercise-7.3.js
    Author: Gunner Bradley
    Date: 09/25/21
    Description: Using Mocha Chai tests
*/

// init requirements
const fruits = require("../bradley-fruits.js");
const chai = require("chai");

const assert = chai.assert;

// Test
describe("fruits", () => {
    it("should return an array of fruits", () =>{
        let f = fruits('Apple, Orange, Mango');
        assert(Array.isArray(f));
    });
});