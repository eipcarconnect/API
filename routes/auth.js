const express = require('express')
const router = express.Router();
const signup = require('./auth/signup.js');
const signin = require('./auth/signin.js');


router.route('/signup').post(signup);

router.route('/signin').post(signin);



module.exports = router;