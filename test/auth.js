const app = require("../app");
const expect = require("chai").expect;
const request = require("request");
const User = require('../models/user');
let server;

before(function (done) {
    server = app.listen(3000, function() {
        
       
        done();
    });
    
})

describe("Auth Routes Testing", function() {

    describe("Signup test", function() {
        it("Basic Sign up", function(done) {
            User.deleteOne({email: "testemaildonotuse@gmail.com"}, function(err) {

                request.post("http://localhost:3000/auth/signup").form({
                    name: "testnamedonotuse",
                    password: "testpassworddonotuse123",
                    email: "testemaildonotuse@gmail.com",
                    birthdate: "1998-10-08"
                }).on('response', function(response) {
                    expect(response.statusCode).to.equal(200);
                    done();
                })
            })
          
        })

        it("Weak Password", function(done){
            User.deleteOne({email: "testemaildonotuse@gmail.com"}, function(err) {

                request.post("http://localhost:3000/auth/signup").form({
                    name: "testnamedonotuse",
                    password: "123",
                    email: "testemaildonotuse@gmail.com",
                    birthdate: "1998-10-08"
                }).on('response', function(response) {
                    expect(response.body.error).to.equal('PasswordIsWeak');
                    done();
                })
            })
        })
    });
})

after(function(done) {
    server.close();
    done();
})