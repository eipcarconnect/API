const config = require('../config/database');
const jwt = require('jsonwebtoken');
const log = require('../routes/log');
const User = require('../models/user');
const Permission = require('../models/permission');

/**
 * @api {post} /data/addpermission Add Permission between User and Vehicles
 * @apiName Add Per
 * @apiGroup Data
 *
 * @apiParam {String} token The user token
 * @apiParam {String} idUser The user id whow ants to have the permission
 * @apiParam {String} idVehicle the id of the vehicle
 * @apiParam {bool} seeLastSeen Does the user has permission to see when the vehicle was last seen ?
 * @apiParam {bool} seePosition Does the user has permission to see where the vehicle is ?
 * @apiParam {bool} seeData Does the user has permission to dee the data of the vehicle ?
 *
 * @apiSuccess {Boolean} success true
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *			"success: true, 
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
		log("Body is empty", "INFO", "addpermission.js");
		res.status(400);
		return res.json({ success: false, error: 'BodyEmpty' });
	} else if (!req.body.token || !req.body.idUser || !req.body.idVehicle) {
		log("Body is empty", "INFO", "addpermission.js");
		console.log(req.body);
		res.status(400);
		return res.json({ success: false, error: 'MissingArgument' });
	} else {
		jwt.verify(req.body.token, config.secret, function(err, decoded){
			if (err) {
				log("Invalid Token", "INFO", "addpermission.js");
				res.status(400);
				return res.json({ success: false, error: 'InvalidToken' });
			}
			else {
				User.findOne({
                    email: decoded.email
                }, function(err, user) {
                    if (!user) {
                        log("Invalid Token", "ERROR", "addpermission.js");
                        res.status(500);
                        return res.json({success: false, error: 'InvalidToken'});
					}
					else {
						
						let newPermission = new Permission({
                            idUser: req.body.idUser,
                            idVehicle: req.body.idVehicle,
                            seeLastSeen: req.body.seeLastSeen,
                            seePosition: req.body.seePosition,
                            seeData: req.body.seeData
						})
						newPermission.save(function(err, saved) {
							if (err) {
								log(err, "ERROR", "addpermission.js");
								res.status(500);
								return res.json({success: false, error: 'APIInternalError'});
							}
							log("Permission created", "INFO", "addpermission.js");
							console.log(saved);
							res.status(200);
							return res.json({ 
								success: true, 
								msg: "Permission created with success"
							});
						});

					}
				});
				
			}
		});
	}
}
