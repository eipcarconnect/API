const app = require("../app");
const expect = require("chai").expect;
const request = require("request");
const User = require('../models/user');
let server;

before(function (done) {
    server = app.listen(3000, function() {
        User.deleteOne({email: "testemaildonotuse@gmail.com"}, function(err) {

        })
        done();  
    });

    
    
})

describe("Auth Routes Testing", function() {

    describe("Signup test", function() {
        it("Basic Sign up", function() {
    
            request.post({url : "localhost:3000", form: {
                name: "testnamedonotuse",
                password: "testpassworddonotuse123",
                email: "testemaildonotuse@gmail.com",
                birthdate: "1998-10-08"
            }}, function(err, httpResponse, body) {
                expect().to.equal(2);
            })
            
            
        })
    });
})

after(function(done) {
    server.close();
    done();
})