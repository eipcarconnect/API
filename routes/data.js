const express = require('express')
const router = express.Router();
const getCompany = require('./data/getCompany');
const getVehiclesManager = require('./data/manager/getvehicles');
const getVehiclesUser = require('./data/user/getvehicles');
const addVehiclesManager = require('./data/manager/addvehicle');
const addRideUser = require('./data/user/addRide');
const getRideManager = require('./data/manager/getRide');
const getRideUser = require('./data/user/getRide');

router.route('/company').get(getCompany);

router.route('/manager/addvehicle').post(addVehiclesManager);

router.route('/user/getvehicles').post(getVehiclesUser);

router.route('/manager/getvehicles').post(getVehiclesManager);

router.route('/user/addride').post(addRideUser);

router.route('/manager/getrides').post(getRideManager);

router.route('/user/getrides').post(getRideUser);

module.exports = router;