const express = require('express');
const app = express();
const auth = require('./routes/auth.js')
const data = require('./routes/data.js')
const cors = require('cors');
const config = require('./config/database');
const mongoose = require('mongoose');
const firebase = require('./config/firebase.json');


mongoose.connect(config.database, {useNewUrlParser: true});

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTION');
	res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(firebase),
  databaseURL: "https://carconnect-e09c5.firebaseio.com"
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.get('/test', (req, res) => res.send('Express is working'));

app.use('/auth', auth);

app.use('/data', data);

module.exports = app;
