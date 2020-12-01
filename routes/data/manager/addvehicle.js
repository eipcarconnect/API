const config = require('../../../config/database');
const jwt = require('jsonwebtoken');
const log = require('../../log');
const Manager = require('../../../models/manager');
const Vehicle = require('../../../models/vehicle');

/**
 * @api {post} /data/manager/addvehicle Add Vehicle
 * @apiName Add Vehicle
 * @apiGroup Data
 *
 * @apiParam {String} token The manager token
 * @apiParam {String} model The model of the vehicle
 * @apiParam {String} licencePlate The licence plate of the vehicle
 *
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} msg The message of the vehicle
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *			"success": true,
 *			msg: "Vehicle created with success"
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
 * @apiError InvalidToken The token provided is invalid
 *
 * @apiErrorExample Invalid Token:
 *     HTTP/1.1 400 Bad Request
 *     {
 * 	 "success": false,
 *       "error": "Invalid Token"
 *     }
 */

module.exports = 
function (req, res) {
	if (!req.body) {
		log("Body is empty", "INFO", "addvehicle.js");
		res.status(400);
		return res.json({ success: false, error: 'BodyEmpty' });
	} else if (!req.body.token || !req.body.model || !req.body.licencePlate) {
		log("Missing Arguments", "INFO", "addvehicle.js");
		console.log(req.body);
		res.status(400);
		return res.json({ success: false, error: 'MissingArgument' });
	} else {
		jwt.verify(req.body.token, config.secret, function(err, decoded){
			if (err) {
				log("Invalid Token", "INFO", "addvehicle.js");
				res.status(400);
				return res.json({ success: false, error: 'InvalidToken' });
			}
			else {
				Manager.findOne({
                    email: decoded.email
                }, function(err, manager) {
                    if (!manager) {
                        log("Invalid Token", "ERROR", "addvehicle.js");
                        res.status(500);
                        return res.json({success: false, error: 'InvalidToken'});
					}
					else {
						
						let newVehicle = new Vehicle({
							company: manager.company,
							speed: Math.floor(Math.random() * 100),
							breakPressed: false,
							clutchPressed: false,
							tempCoolant: Math.floor(Math.random() * 100),
							tempEngine: Math.floor(Math.random() * 100),
							model: req.body.model,
							licencePlate: req.body.licencePlate,
							kilometer: Math.floor(Math.random() * 10000)
						})
						newVehicle.save(function(err, saved) {
							if (err) {
								log(err, "ERROR", "addvehicle.js");
								res.status(500);
								return res.json({success: false, error: 'APIInternalError'});
							}
							log("Vehicle created", "INFO", "addvehicle.js");
							console.log(saved);
							res.status(200);
							return res.json({ 
								success: true, 
								msg: "Vehicle created with success"
							});
						});

					}
				});
				
			}
		});
	}
}
