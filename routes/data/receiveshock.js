const config = require('../../config/database');
const jwt = require('jsonwebtoken');
const log = require('../log');
const User = require('../../models/user');

/**
 * @api {post} /data/getvehiculeinfo Get Vehicule Info
 * @apiName Get Vehicule Info
 * @apiGroup Data
 *
 * @apiParam {String} token The user token
 *
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} speed  The speed is sent in km/h
 * @apiSuccess {String} fuel  The fuel is sent in %
 * @apiSuccess {String} latitude  The latitude of the vehicule
 * @apiSuccess {String} longitude  The longitude of the vehicule
 * @apiSuccess {String} latitude  The latitude of the vehicule
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *			"success: true, 
 *			"speed": "10", 
 *			"fuel": "45",
 *			"latitude": "46.510492",
 *			"longitude": "3.533891",
 *			"globalState": "Good"
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
		log("Body is empty", "INFO", "receiveshock.js");
		res.status(400);
		return res.json({ success: false, error: 'BodyEmpty' });
	} else if (!req.body.token) {
		log("Body is empty", "INFO", "receiveshock.js");
		console.log(req.body);
		res.status(400);
		return res.json({ success: false, error: 'MissingArgument' });
	} else {
		jwt.verify(req.body.token, config.secret, function(err, decoded){
			if (err) {
				log("Invalid Token", "INFO", "receiveshock.js");
				res.status(400);
				return res.json({ success: false, error: 'InvalidToken' });
			}
			else {
				User.findOne({
                    email: decoded.email
                }, function(err, user) {
                    if (!user) {
                        log("Invalid Token", "ERROR", "receiveshock.js");
                        res.status(500);
                        return res.json({success: false, error: 'InvalidToken'});
					}
					else {
						log("Shock notification sent", "INFO", "receiveshock.js");
						res.status(201);
						return res.json({});
					}
				});
				
			}
		});
	}
}
