const config = require('../../../config/database');
const jwt = require('jsonwebtoken');
const log = require('../../log');
const Manager = require('../../../models/manager');
const Vehicle = require('../../../models/vehicle');

/**
 * @api {post} /data/manager/getvehicles Get Vehicle Manager
 * @apiName Get Vehicles
 * @apiGroup Data
 *
 * @apiParam {String} token The manager token
 *
 * @apiSuccess {Boolean} success true
 * @apiSuccess {Array} vehicles An array of vehicles belonging to the company
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *			"success: true, 
 *			"vehicles": [
 *			 {
 *			 	_id: "id",
 *			  	company: "Total",
 *			    model: "Tesla Model 3",
 *				speed: 200,
 *				breakPressed: false,
 *				clutchPressed: false,
 *				tempCoolant: 20,
 *				tempEngine: 60
 *			 }
 *			]
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
		log("Body is empty", "INFO", "getvehicles.js");
		res.status(400);
		return res.json({ success: false, error: 'BodyEmpty' });
	} else if (!req.body.token) {
		log("Body is empty", "INFO", "getvehicles.js");
		console.log(req.body);
		res.status(400);
		return res.json({ success: false, error: 'MissingArgument' });
	} else {
		jwt.verify(req.body.token, config.secret, function(err, decoded){
			if (err) {
				log("Invalid Token", "INFO", "getvehicles.js");
				res.status(400);
				return res.json({ success: false, error: 'InvalidToken' });
			}
			else {
				Manager.findOne({
                    email: decoded.email
                }, function(err, manager) {
                    if (!manager) {
                        log("Invalid Token", "ERROR", "getvehicles.js");
                        res.status(500);
                        return res.json({success: false, error: 'InvalidToken'});
					}
					else {
						Vehicle.find ({
							company: manager.company
						}, function(err,vehicles) {
							if (err)
								res.status(500).send();
							if (vehicles) {
								log("Vehicule Info successfully retrieved", "INFO", "getvehicles.js");
								res.status(200);
								return res.json({ 
									success: true, 
									vehicles: vehicles
								});
							}
						})
					}
				});
			}
		});
	}
}
