const expect = require("chai").expect;
const app = require("../app");
const request = require("request");
const User = require('../models/user');
const jwt = require("jsonwebtoken");
const config = require('../config/database');
let server;
let token;

before(function (done) {
    User.deleteOne({email: "testemaildonotuse@gmail.com"}, function(err) {

        request.post("http://localhost:3000/auth/signup").form({
            name: "testnamedonotuse",
            password: "testpassworddonotuse123",
            email: "testemaildonotuse@gmail.com",
            birthdate: "1998-10-08"
        }).on('response', function(response) {
            token = jwt.sign(newUser.toJSON(), config.secret);
            done();
        })
    })

})

describe("Data routes test", function() {
    before()
    describe("Get Vehicue Infos", function () {
        it("Success", function() {
            request.post({url:'http://localhost:3000/auth/getuserinfos', form: {token: token}}, function(err,httpResponse,body){ 
                let parsedbody = JSON.parse(body)
                expect(parsebody.success).to.equal(true);
                
                done();
             })
        })
        it("Speed", function() {
            request.post({url:'http://localhost:3000/auth/getuserinfos', form: {token: token}}, function(err,httpResponse,body){ 
                let parsedbody = JSON.parse(body)
                expect(parsebody.speed).to.equal(10);
                done();
             })
        })
        it("Fuel", function() {
            request.post({url:'http://localhost:3000/auth/getuserinfos', form: {token: token}}, function(err,httpResponse,body){ 
                let parsedbody = JSON.parse(body)
                expect(parsebody.fuel).to.equal(45);
                done();
             })
        })
        it("Latitude", function() {
            request.post({url:'http://localhost:3000/auth/getuserinfos', form: {token: token}}, function(err,httpResponse,body){ 
                let parsedbody = JSON.parse(body)
                expect(parsebody.latitude).to.equal(46.510492);
                done();
             })
        })
        it("Longitude", function() {
            request.post({url:'http://localhost:3000/auth/getuserinfos', form: {token: token}}, function(err,httpResponse,body){ 
                let parsedbody = JSON.parse(body)
                expect(parsebody.longitude).to.equal(3.533891);
                done();
             })
        })
        it("Global State", function() {
            request.post({url:'http://localhost:3000/auth/getuserinfos', form: {token: token}}, function(err,httpResponse,body){ 
                let parsedbody = JSON.parse(body)
                expect(parsebody.longitude).to.equal("Good");
                done();
             })
        })
    })
    
});