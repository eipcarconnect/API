const express = require('express')
const router = express.Router();
const getvehiculeinfo = require('./data/getvehiculeinfo.js');
const receiveshock = require('./data/receiveshock.js');
const uploaddrivingdata = require('./data/uploaddrivingdata.js');

router.route('/getvehiculeinfo').post(getvehiculeinfo);

router.route('/receiveshock').post(receiveshock);

router.route('/uploaddrivingdata').post(uploaddrivingdata);

module.exports = router;