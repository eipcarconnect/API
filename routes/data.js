const express = require('express')
const router = express.Router();
const getvehiculeinfo = require('./data/getvehiculeinfo.js');

router.route('/getvehiculeinfo').post(getvehiculeinfo);

module.exports = router;