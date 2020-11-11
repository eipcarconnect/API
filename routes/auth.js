const express = require('express')
const router = express.Router();
const signup = require('./auth/user/signup.js');
const signin = require('./auth/user/signin.js');
const getuserinfos = require('./auth/user/getuserinfos.js');
const edit = require('./auth/user/edit.js');
//const addregistrationtoken = require('../notusedroutes/addRegistrationToken');
const managerSignup = require('./auth/manager/managerSignup');
const managerSignin = require('./auth/manager/managerSignin');
const managerGetInfo = require('./auth/manager/getinfo');
const managerEditInfo = require ('./auth/manager/editManagerInfo');

router.route('/edit').post(edit);

router.route('/signup').post(signup);

router.route('/signin').post(signin);

router.route('/getuserinfos').post(getuserinfos);

//router.route('/addregistrationtoken').post(addregistrationtoken);

router.route('/manager/signup').post(managerSignup);

router.route('/manager/signin').post(managerSignin);

router.route('/manager/getinfo').post(managerGetInfo);

router.route('/manager/edit').post(managerEditInfo);

module.exports = router;