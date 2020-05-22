const app = require("../app");
const expect = require("chai").expect;
const request = require("request");
const User = require('../models/user');
const uniqid = require('uniqid');
const bcrypt = require('bcrypt');
const moment = require('moment');
const jwt = require("jsonwebtoken");
const config = require('../config/database');
let server;
let token;



describe("Data Routes Testing", function() {
	
	let newUser;

    before(function (done) {
        User.deleteOne({email: "testemaildonotuse@gmail.com"}, function(err) {
    
            bcrypt.hash("testpassworddonotuse123", 10, function(err, hash) {

                newUser = new User({
                    name: "testnamedonotuse",
                    email: "testemaildonotuse@gmail.com",
                    password: hash,
                    id: uniqid(),
                    birthdate: moment().format("1998-10-08")
                });
                
                newUser.save(function(err, user) {
					token = jwt.sign(user.toJSON(), config.secret)
                    done();
                })
            })
        })
    })

		
	it("Upload Driving Data test", function(done) {
		
		request.post("http://localhost:3000/data/uploaddrivingdata").form({
			speed: "10", 
			fuel: "45",
			latitude: "46.510492",
			longitude: "3.533891",
			globalState: "Good",
			token
		}).on('response', function(response) {
			expect(response.statusCode).to.equal(201)
			done();
		})
		
	});

	it("Receive Shock test", function(done) {
		
		request.post("http://localhost:3000/data/receiveshock").form({
			token
		}).on('response', function(response) {
			expect(response.statusCode).to.equal(400)
			done();
		})
		
	});

	it("Get Vehicule info test", function(done) {
		
		request.post("http://localhost:3000/data/getvehiculeinfo").form({
			token
		}).on('response', function(response) {
			expect(response.statusCode).to.equal(200)
			done();
		})
		
	});

	it("Failed Token Get Vehicule", function(done) {
		let localtoken = token + "g";
		request.post("http://localhost:3000/data/receiveshock").form({
			localtoken
		}).on('response', function(response) {
			expect(response.statusCode).to.equal(400)
			done();
		})
		
	});

	it("Failed Token Upload Driving data", function(done) {
		let localtoken = token + "g";
		request.post("http://localhost:3000/data/uploaddrivingdata").form({
			localtoken
		}).on('response', function(response) {
			expect(response.statusCode).to.equal(400)
			done();
		})
		
	});

	it("Failed Token Get Vehicule", function(done) {
		let localtoken = token + "g";
		request.post("http://localhost:3000/data/getvehiculeinfo").form({
			localtoken
		}).on('response', function(response) {
			expect(response.statusCode).to.equal(400)
			done();
		})
		
	});

	it("Empty Body Get Vehicule", function(done) {
		request.post("http://localhost:3000/data/getvehiculeinfo").form({
		}).on('response', function(response) {
			expect(response.statusCode).to.equal(400)
			done();
		})
		
	});

	it("Empty Body Upload Driving data", function(done) {
		request.post("http://localhost:3000/data/uploaddrivingdata").form({
		}).on('response', function(response) {
			expect(response.statusCode).to.equal(400)
			done();
		})
		
	});

	it("Empty Body Get Vehicule", function(done) {
		request.post("http://localhost:3000/data/receiveshock").form({
		}).on('response', function(response) {
			expect(response.statusCode).to.equal(400)
			done();
		})
		
	});
	
});

