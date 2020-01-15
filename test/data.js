const expect = require("chai").expect;
const app = require("../app");
const request = require("request");
const User = require('../models/user');
const jwt = require("jsonwebtoken");
const config = require('../config/database');
const bcrypt = require('bcrypt');
const uniqid = require('uniqid');
const moment = require('moment');
let server;
let token;
let newUser;

describe("Data routes test", function() {
    before(function (done) {
        // request.post("http://localhost:3000/auth/signup").form({
        //             name: "testnamedonotuse",
        //             password: "testpassworddonotuse123",
        //             email: "testemaildonotuse@gmail.com",
        //             birthdate: "1998-10-08"
        //         }).on('response', function(response) {
        //             token = jwt.sign(newUser.toJSON(), config.secret);
        //             done();
        //         });
        bcrypt.hash("testpassworddonotuse123", 10, function(err, hash) {
            newUser = new User({
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

    describe("Get Vehicue Infos", function () {
        it("Success", function() {
            request.post({url:'http://localhost:3000/auth/getuserinfos', form: {token: token}}, function(err,httpResponse,body){ 
                let parsedbody = JSON.parse(body)
                expect(parsedbody.success).to.equal(true);
                print("TEST " + parsedbody);
                                done();
            })
            
        })
        it("Speed", function() {
            request.post({url:'http://localhost:3000/auth/getuserinfos', form: {token: token}}, function(err,httpResponse,body){ 
                let parsedbody = JSON.parse(body)
                expect(parsedbody.speed).to.equal(10);
                done();
             })
        })
        it("Fuel", function() {
            request.post({url:'http://localhost:3000/auth/getuserinfos', form: {token: token}}, function(err,httpResponse,body){ 
                let parsedbody = JSON.parse(body)
                expect(parsedbody.fuel).to.equal(45);
                done();
             })
        })
        it("Latitude", function() {
            request.post({url:'http://localhost:3000/auth/getuserinfos', form: {token: token}}, function(err,httpResponse,body){ 
                let parsedbody = JSON.parse(body)
                expect(parsedbody.latitude).to.equal(46.510492);
                done();
             })
        })
        it("Longitude", function() {
            request.post({url:'http://localhost:3000/auth/getuserinfos', form: {token: token}}, function(err,httpResponse,body){ 
                let parsedbody = JSON.parse(body)
                expect(parsedbody.longitude).to.equal(3.533891);
                done();
             })
        })
        it("Global State", function() {
            request.post({url:'http://localhost:3000/auth/getuserinfos', form: {token: token}}, function(err,httpResponse,body){ 
                let parsedbody = JSON.parse(body)
                expect(parsedbody.longitude).to.equal("Good");
                done();
             })
        })
    })
    
});