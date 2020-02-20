const config = require('../../config/database');
const jwt = require('jsonwebtoken');
const log = require('../log');
const User = require('../../models/user');

/**
 * @api {post} /auth/getuserinfos Get User Infos
 * @apiName Get User Infos
 * @apiGroup Auth
 *
 * @apiParam {String} token The user token
 *
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} name  The name of the user
 * @apiSuccess {String} email  The email address of the user
 * @apiSuccess {String} birthdate  The birthdate of the user
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *			"success: true, 
 *			"name": "name", 
 *			"email": "emailaddress",
 *			"birthdate": "YYYY-MM-DDTHH:MM:SS.000Z"
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
		log("Body is empty", "INFO", "getuserinfo.js");
		res.status(400);
		return res.json({ success: false, error: 'BodyEmpty' });
	} else if (!req.body.token) {
		log("Body is empty", "INFO", "getuserinfo.js");
		console.log(req.body);
		res.status(400);
		return res.json({ success: false, error: 'MissingArgument' });
	} else {
		jwt.verify(req.body.token, config.secret, function(err, decoded){
			if (err) {
				log("Invalid Token", "INFO", "getuserinfo.js");
				res.status(400);
				return res.json({ success: false, error: 'InvalidToken' });
			}
			else {
				User.findOne({
                    email: decoded.email
                }, function(err, user) {
                    if (!user) {
                        log(err, "ERROR", "getuserinfo.js");
                        res.status(500);
                        return res.json({success: false, error: 'InvalidToken'});
					}
					else {
						log("Info successfully retrieved", "INFO", "getuserinfo.js");
						res.status(200);
						return res.json({ 
							success: true, 
							name: user.name, 
							email: user.email,
							birthdate: user.birthdate
						});
					}
				});
				
			}
		});
	}
}
