/* 
    Title: bradley-exercise-7.2.js
    Author: Gunner Bradley
    Date: 09/25/21
    Description: Using Mocha Chai tests
*/

const assert = require("assert");

describe("String#split", function() {
    it("should return an array of fruits", function() {
        assert(Array.isArray('Apple, Orange, Mango'.split(',')));
    });
});