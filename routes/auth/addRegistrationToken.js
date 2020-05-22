const config = require('../../config/database');
const jwt = require('jsonwebtoken');
const log = require('../log');
const User = require('../../models/user');

/**
 * @api {post} /auth/addregistrationtoken Add Registration Token
 * @apiName Add Registration Token
 * @apiGroup Auth
 *
 * @apiParam {String} token The user token
 * @apiParam {Object} registrationToken The registration Token
 *
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} msg   Message of success
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *			"success": true, 
 *			"msg": "The token was added sucessfully"
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
 * @apiErrorExample InvalidToken:
 *     HTTP/1.1 400 Bad Request
 *     {
 * 	 "success": false,
 *       "error": "InvalidToken"
 *     }
 * 
 * @apiError ApiInternalError There was an internal error in the API
 *
 * @apiErrorExample ApiInternalError:
 *     HTTP/1.1 500 Bad Request
 *     {
 * 	 "success": false,
 *       "error": "ApiInternalError"
 *     }
 */

module.exports = 
function (req, res) {
	if (!req.body) {
		log("Body is empty", "INFO", "addRegistrationToken.js");
		res.status(400);
		return res.json({ success: false, error: 'BodyEmpty' });
	} else if (!req.body.token || !req.body.registrationToken) {
		log("Body is empty", "INFO", "getvehiculeinfo.js");
		console.log(req.body);
		res.status(400);
		return res.json({ success: false, error: 'MissingArgument' });
	} else {
		jwt.verify(req.body.token, config.secret, function(err, decoded){
			if (err) {
				log("Invalid Token", "INFO", "addRegistrationToken.js");
				res.status(400);
				return res.json({ success: false, error: 'InvalidToken' });
			}
			else {
				User.findOne({
                    email: decoded.email
                }, function(err, user) {
                    if (!user) {
                        log("Invalid Token", "ERROR", "addRegistrationToken");
                        res.status(500);
                        return res.json({success: false, error: 'InvalidToken'});
					}
					else {
						user.registrationToken = req.body.registrationToken;
						user.save(function(err, user) {
							if (err) {
								res.status(500);
								log("Error when saving user", "ERROR", "addRegistrationToken.js");
								res.json({success: false, error: 'ApiInternalError'});
							}
							else {
								log("Registration Token sucessfully added", "INFO", "addRegistrationToken.js");
								return res.status(200).json({success: true, msg: "The token was added sucessfully"});
							}
						})
					}
				});
				
			}
		});
	}
}