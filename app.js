const express = require('express');
const app = express();
const auth = require('./routes/auth.js')
const data = require('./routes/data.js')
const cors = require('cors');
const config = require('./config/database');
const mongoose = require('mongoose');


mongoose.connect(config.database, {useNewUrlParser: true});

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTION');
	res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.get('/test', (req, res) => res.send('Express is working'));

app.use('/auth', auth);

app.use('/data', data);

module.exports = app;
