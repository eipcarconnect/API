const config = require('../config/database');
const jwt = require('jsonwebtoken');
const log = require('../routes/log');
const User = require('../models/user');

/**
 * @api {post} /data/uploaddrivingdata Upload Driving Data
 * @apiName Upload Driving Data
 * @apiGroup Data
 *
 * @apiParam {String} token The user token
 * @apiParam {String} speed  The speed is sent in km/h
 * @apiParam {String} fuel  The fuel is sent in %
 * @apiParam {String} latitude  The latitude of the vehicle
 * @apiParam {String} longitude  The longitude of the vehicle
 * @apiParam {String} latitude  The latitude of the vehicle
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *			success: true, 
 *			msg: "Driving data successfully uploaded"
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
		log("Body is empty", "INFO", "uploaddrivingdata.js");
		res.status(400);
		return res.json({ success: false, error: 'BodyEmpty' });
	} else if (!req.body.token) {
		log("Body is empty", "INFO", "uploaddrivingdata.js");
		console.log(req.body);
		res.status(400);
		return res.json({ success: false, error: 'MissingArgument' });
	} else {
		jwt.verify(req.body.token, config.secret, function(err, decoded){
			if (err) {
				log("Invalid Token", "INFO", "uploaddrivingdata.js");
				res.status(400);
				return res.json({ success: false, error: 'InvalidToken' });
			}
			else {
				User.findOne({
                    email: decoded.email
                }, function(err, user) {
                    if (!user) {
                        log("Invalid Token", "ERROR", "uploaddrivingdata.js");
                        res.status(500);
                        return res.json({success: false, error: 'InvalidToken'});
					}
					else {
						log("Driving data successfully uploaded", "INFO", "uploaddrivingdata.js");
						res.status(201);
						return res.json({success: true, msg: "Driving data successfully uploaded"});
					}
				});
				
			}
		});
	}
}
