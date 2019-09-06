const express = require('express')
const router = express.Router();
const signup = require('./auth/signup.js');

router.route('/signup').post(signup);


module.exports = router;