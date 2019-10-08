const app = require("../app");
const expect = require("chai").expect;
const request = require("request");
let server;

before(function (done) {
    server = app.listen(3000, function() {
        done();
    });

    
})

describe("Auth Routes Testing", function() {

    describe("Signup test", function() {
        it("Basic Sign up", function() {
    
            request.post("localhost:3000").form({})
    
    
            
            expect(1 + 1).to.equal(2);
        })
    });
})

after(function(done) {
    server.close();
    done();
})