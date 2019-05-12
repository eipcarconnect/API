const expect = require("chai").expect;

describe("Mocha and Travis test", function() {
    it("return that everything worked", function() {
        expect(1 + 1).to.equal(2);
    })
});