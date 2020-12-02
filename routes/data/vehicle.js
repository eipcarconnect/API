const config = require('../../config/database');
const jwt = require('jsonwebtoken');
const log = require('../log');
const Vehicle = require('../../models/vehicle');
const Ride = require('../../models/ride');
const moment = require('moment')

/**
 * @api {post} /data/vehicle Update Vehicle info
 * @apiName Vehicle
 * @apiGroup Data
 *
 * @apiParam {String} licencePlate The licence plate of the vehicle
 * @apiParam {Number} kilometer The kilometer of the vehicule
 * @apiParam {Number} fuel Level of fuel in %
 * @apiParam {Number} pressure The pressure of the tire in %
 * @apiParam {Number} oil The level of the oil in %
 * @apiParam {Number} battery The charge of the battery in %
 * @apiParam {Number} breakUsage The break usage in %
 *
 *
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} msg The message of success
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *			"success": true,
 *			msg: "Vehicle Updated with success"
 *     }
 *
 * @apiError MissingArgument An argument of the request is missing
 *
 * @apiErrorExample MissingArgument:
 *     HTTP/1.1 400 Bad Request
 *     {
 * 	 "success": false,
 *       "error": "MissingArgument"
 *     }
 *
 * @apiError BodyEmpty The Body of the Request is empty
 *
 * @apiErrorExample BodyEmpty:
 *     HTTP/1.1 400 Bad Request
 *     {
 * 	 "success": false,
 *       "error": "BodyEmpty"
 *     }
 *
 * @apiError VehicleNotFound The vehicle is not created in the database
 *
 * @apiErrorExample Vehicle Not Found:
 *     HTTP/1.1 404 Bad Request
 *     {
 * 	 "success": false,
 *       "error": "VehicleNotFound"
 *     }
 */

module.exports =
    function (req, res) {
        if (!req.body) {
            log("Body is empty", "INFO", "vehicle.js");
            res.status(400);
            return res.json({ success: false, error: 'BodyEmpty' });
        } else if (!req.body.licencePlate || !req.body.kilometer || !req.body.fuel || !req.body.pressure || !req.body.oil || !req.body.battery ||!req.body.breakUsage) {
            log("Missing Arguments", "INFO", "addRide.js");
            console.log(req.body);
            res.status(400);
            return res.json({ success: false, error: 'MissingArgument' });
        } else {
            Vehicle.findOne({
                licencePlate: req.body.licencePlate
            }, function(err, vehicle) {
                if (!vehicle) {
                    log("VehicleNotFound", "ERROR", "vehicle.js");
                    res.status(404);
                    return res.json({success: false, error: 'VehicleNotFound'});
                }
                else {
                    vehicle.kilometer = req.body.kilometer;
                    vehicle.fuel = req.body.fuel;
                    vehicle.pressure = req.body.pressure;
                    vehicle.oil = req.body.oil;
                    vehicle.battery = req.body.battery;
                    vehicle.breakUsage = req.body.breakUsage;

                    vehicle.save(function(err, vehicle) {
                        if (err) {
                            log(err, "ERROR", "vehicle.js");
                            res.status(500);
                            return res.json({success: false, error: 'Vehicle Updated with success'});
                        }
                        log(vehicle, 'INFO', "vehicle.js");
                        res.status(200);
                        return res.json({ success: true, msg: "Vehicle Updated with success" });
                    });

                }
            });


        }
    }