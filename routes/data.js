const express = require('express')
const router = express.Router();
const getCompany = require('./data/getCompany');
const getVehiclesManager = require('./data/manager/getvehicles');
const getVehiclesUser = require('./data/user/getvehicles');
const addVehiclesManager = require('./data/manager/addvehicle');
const addRideUser = require('./data/user/addRide');

router.route('/company').get(getCompany);

router.route('/manager/addvehicle').post(addVehiclesManager);

router.route('/user/getvehicles').post(getVehiclesUser);

router.route('/manager/getvehicles').post(getVehiclesManager);

router.route('/user/addride').post(addRideUser);

module.exports = router;