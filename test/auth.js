const app = require("../app");
const expect = require("chai").expect;
const request = require("request");
const User = require('../models/user');
const uniqid = require('uniqid');
const bcrypt = require('bcrypt');
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
                   
                    expect(response.statusCode).to.equal(400);
                    done();
                })
            })
        })

        it("Already Exist", function(done){
            User.deleteOne({email: "testemaildonotuse@gmail.com"}, function(err) {

                bcrypt.hash("testpassworddonotuse123", 10, function(err, hash) {
                    let newUser = new User({
                        name: testnamedonotuse,
                        email: "testemaildonotuse@gmail.com",
                        password: hash,
                        id: uniqid(),
                        birthdate: moment().format("1998-10-08")
                    });
                    newUser.save(function(err, user) {
                        request.post("http://localhost:3000/auth/signup").form({
                            name: "testnamedonotuse",
                            password: "testpassworddonotuse123",
                            email: "testemaildonotuse@gmail.com",
                            birthdate: "1998-10-08"
                        }).on('response', function(response) {
                            expect(response.statusCode).to.equal(400);
                            done();
                        })
                    })
                })
            })
        })

        
    });
})

after(function(done) {
    server.close();
    done();
})