const app = require("../app");
const expect = require("chai").expect;
const request = require("request");
const User = require('../models/user');
const uniqid = require('uniqid');
const bcrypt = require('bcrypt');
const moment = require('moment');
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
                        name: "testnamedonotuse",
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

    before(function (done) {
        User.deleteOne({email: "testemaildonotuse@gmail.com"}, function(err) {
    
            bcrypt.hash("testpassworddonotuse123", 10, function(err, hash) {

                let newUser = new User({
                    name: "testnamedonotuse",
                    email: "testemaildonotuse@gmail.com",
                    password: hash,
                    id: uniqid(),
                    birthdate: moment().format("1998-10-08")
                });
                
                newUser.save(function(err, user) {
                    done();
                })
            })
        })
    })

    describe("Signin test", function() {
        it("Basic signin", function(done) {
            request.post("http://localhost:3000/auth/signin").form({
                email: "testemaildonotuse@gmail.com",
                password: "testpassworddonotuse123"
            }).on('response', function(response) {
                expect(response.statusCode).to.equal(200);
                done();
            })
        })

        it("Wrong password", function(done) {
            request.post("http://localhost:3000/auth/signin").form({
                email: "testemaildonotuse@gmail.com",
                password: "testpassworddfonotuse123"
            }).on('response', function(response) {
                expect(response.statusCode).to.equal(404);
                done();
            })
        })

        it("Wrong email", function(done) {
            request.post("http://localhost:3000/auth/signin").form({
                email: "testemaildonotusfe@gmail.com",
                password: "testpassworddonotuse123"
            }).on('response', function(response) {
                expect(response.statusCode).to.equal(404);
                done();
            })
        })
    })

    describe("Get User Infos", function () {
        it("Name check", function(done) {

            request.post("http://localhost:3000/auth/getuserinfos").form({
                password: "testpassworddonotuse123",
                email: "testemaildonotuse@gmail.com"
            }).on('response', function(response) {
                expect(response.body).to.equal(true);
                if (response.body)
                    expect(response.body.name).to.equal("testnamedonotuse");
                done();
            })
        })

        it("Birthday check", function(done) {
            request.post("http://localhost:3000/auth/getuserinfos").form({
                password: "testpassworddonotuse123",
                email: "testemaildonotuse@gmail.com"
            }).on('response', function(response) {
                expect(response.body).to.equal(true);
                if (response.body)
                    expect(response.body.name).to.equal("1998-10-08T00:00:00.000Z");
                done();
            })
        })

        it("Email check", function(done) {
            request.post("http://localhost:3000/auth/getuserinfos").form({
                password: "testpassworddonotuse123",
                email: "testemaildonotuse@gmail.com"
            }).on('response', function(response) {
                
                if (response.body)
                    expect(response.body.name).to.equal("testemaildonotuse@gmail.com");
                else
                    expect(1).to.equal(2);
                done();
            })
        })
    })
})

after(function(done) {
    server.close();
    done();
})