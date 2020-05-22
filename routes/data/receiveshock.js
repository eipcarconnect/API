const config = require('../../config/database');
const jwt = require('jsonwebtoken');
const log = require('../log');
const User = require('../../models/user');
const firebaseAdmin = require("firebase-admin");

/**
 * @api {post} /data/receiveshock Receive Shock 
 * @apiName Receive Shock
 * @apiGroup Data
 *
 * @apiParam {String} token The user token
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *			success: true,
 *			msg : "Shock notification sent"
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
 *  
 * @apiError MissingRegistrationToken You must use the registration token route first
 *
 * @apiErrorExample Missing Registration Token:
 *     HTTP/1.1 400 Bad Request
 *     {
 * 	 "success": false,
 *       "error": "MissingRegistrationToken"
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
                        res.status(400);
                        return res.json({success: false, error: 'InvalidToken'});
					}
					if (!user.registrationToken) {
						log("Missing Registration Token", "ERROR", "receiveshock.js");
						res.status(400);
                        return res.json({success: false, error: 'MissingRegistrationToken'});
					}	
					let message = {
						notification: {
							title: "Collision détecté",
							body: "Une collision sur votre véhicule à été détecté"
						},
						token: user.registrationToken
					}
					firebaseAdmin.messaging().send(message).then((response) => {
						log("Shock notification sent", "INFO", "receiveshock.js");

						res.status(201);
						return res.json({success: true, msg : "Shock notification sent"});
					}).catch((error) => {
						log("Error when sending notification", "ERROR", "receiveshock.js");
						res.status(500);
						return res.json({success: true, msg : "Error when sending notification"});
						
					})
						
					
					
				});
				
			}
		});
	}
}
