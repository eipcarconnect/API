const express = require('express')
const router = express.Router();
const signup = require('./auth/signup.js');
const signin = require('./auth/signin.js');
const getuserinfos = require('./auth/getuserinfos.js');
const edit = require('./auth/edit.js');
const addregistrationtoken = require('./auth/addRegistrationToken');
const managerSignup = require('./auth/managerSignup');
const managerSignin = require('./auth/managerSignin');

router.route('/edit').post(edit);

router.route('/signup').post(signup);

router.route('/signin').post(signin);

router.route('/getuserinfos').post(getuserinfos);

router.route('/addregistrationtoken').post(addregistrationtoken);

router.route('/manager/signup').post(managerSignup);

router.route('/manager/signin').post(managerSignin);

module.exports = router;