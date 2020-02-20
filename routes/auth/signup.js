
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const config = require('../../config/database');
const uniqid = require('uniqid');
const bcrypt = require('bcrypt');
const moment = require('moment')
const log = require('../log');

/**
 * @api {post} /auth/signup SignUp a new User
 * @apiName SignUp
 * @apiGroup Auth
 *
 * @apiParam {String} name User last name and first name.
 * @apiParam {String} username Users unique email.
 * @apiParam {String} password Users password.
 * @apiParam {String} birthdate Users birthdate written in YYYY-MM-DD format.
 *
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} token  The token needed to access authenticated page
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *	"success": true,
 *       "token": "JWT TokenHere"
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
 * @apiError UserAlreadyExist The Username already exist
 *
 * @apiErrorExample UserAlreadyExist:
 *     HTTP/1.1 400 Bad Request
 *     {
 * 	 "success": false,
 *       "error": "UserAlreadyExist"
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
 * @apiError PasswordIsWeak The Password does not fit the standard , it must be at least 8 character long and contain a number and a letter
 *
 * @apiErrorExample PasswordIsWeak:
 *     HTTP/1.1 400 Bad Request
 *     {
 * 	 "success": false,
 *       "error": "PasswordIsWeak"
 *     }
 * @apiError APIInternalError An error occured within the API pleace contat the admin
 *
 * @apiErrorExample APIInternalError:
 *     HTTP/1.1 500 Internal Error
 *     {
 * 	 "success": false,
 *       "error": "APIInternalError"
 *     }
 */

module.exports = 
function(req, res) {
	if (!req.body) {
		log("Body is empty", "INFO", "signup.js");
		res.status(400);
		res.json({success: false, error: 'BodyEmpty'});
	} else if (!req.body.name || !req.body.email || !req.body.password || !req.body.birthdate) {
		log("Missing argument", "INFO", "signup.js");
		res.status(400);
		res.json({success: false, error: 'MissingArgument'});
	} else {
		User.findOne({
			email: req.body.email
		}, function(err, user) {
			if (user) {
				res.status(400);
				log("User already exist", "INFO", "signup.js");
				return res.json({success: false, error: 'UserAlreadyExist'});
			}
			else {

				let reg = new RegExp("(?=.*[A-z])(?=.*[0-9])(?=.{8,})");
				
				if (!reg.test(req.body.password)) {
					log("Password is weak", "INFO", "signup.js");
					res.status(400);
					return res.json({success: false, error: 'PasswordIsWeak'});
				}
				log("Creating New User", "INFO", "signup.js");
				bcrypt.hash(req.body.password, 10, function(err, hash) {
					var newUser = new User({
						name: req.body.name,
						email: req.body.email,
						password: hash,
						id: uniqid(),
						birthdate: moment().format(req.body.birthdate)
					});
					
		
					newUser.save(function(err, user) {
						if (err) {
							log(err, "ERROR", "signup.js");
							res.status(500);
							return res.json({success: false, error: 'APIInternalError'});
						}
						log("User created with sucess", "INFO", "signup.js");
						res.status(200);
						var token = jwt.sign(user.toJSON(), config.secret);
						// return the information including token as JSON
						res.json({ success: true, token: 'JWT ' + token });
					});
				  });		
			}
		})
		
	}
};

      