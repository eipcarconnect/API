const express = require('express')
const router = express.Router();
const signup = require('./auth/signup.js');
const signin = require('./auth/signin.js');
const getuserinfos = require('./auth/getuserinfos.js');
const edit = require('./auth/edit.js');

router.route('/edit').post(edit);

router.route('/signup').post(signup);

router.route('/signin').post(signin);

router.route('/getuserinfos').post(getuserinfos);

module.exports = router;