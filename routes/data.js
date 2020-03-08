const express = require('express')
const router = express.Router();
const getvehiculeinfo = require('./data/getvehiculeinfo.js');
const receiveshock = require('./data/receiveshock.js');

router.route('/getvehiculeinfo').post(getvehiculeinfo);

router.route('/receiveshock').post(receiveshock);

module.exports = router;