const express = require('express')
const router = express.Router();
const getvehiculeinfo = require('./data/getvehiculeinfo.js');
const getownedvehicles = require('./data/getownedvehicles.js');
const addownedvehicle = require('./data/addownedvehicle.js');
const addpermission = require('./data/addpermission.js');
const receiveshock = require('./data/receiveshock.js');
const uploaddrivingdata = require('./data/uploaddrivingdata.js');
const modifypermission = require('./data/modifypermission');

router.route('/getvehiculeinfo').post(getvehiculeinfo);

router.route('/receiveshock').post(receiveshock);

router.route('/uploaddrivingdata').post(uploaddrivingdata);

router.route('/getownedvehicles').post(getownedvehicles);

router.route('/addownedvehicle').post(addownedvehicle);

router.route('/addpermission').post(addpermission);

router.route('/modifypermission').post(modifypermission);

module.exports = router;