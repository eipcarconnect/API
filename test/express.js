const expect = require("chai").expect;
const express = require("express");

describe("Express test", function() {
    it("the test route work", function() {
        expect(express).to.not.equal(null);
    })
});