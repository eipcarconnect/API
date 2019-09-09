
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const config = require('../../config/database');
const uniqid = require('uniqid');
const bcrypt = require('bcrypt');


/**
 * @api {post} /auth/signin SignIn a User
 * @apiName SignIn
 * @apiGroup Auth
 *
 * @apiParam {String} username Users unique username.
 * @apiParam {String} password Users password.
 *
 * @apiSuccess {Boolean} success .
 * @apiSuccess {String} msg  .
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "token": "JWT YourTokenHere"
 *     }
 *
 * @apiError UserNotFound The requested user was not found in the database
 *
 * @apiErrorExample UserNotFound:
 *     HTTP/1.1 401 Unauthorized
 *     {
 * 		 "success": false,
 *       "error": "UserNotFound"
 *     }
 *
 * @apiError WrongPassword The password of the given username is incorrect
 *
 * @apiErrorExample WrongPassword:
 *     HTTP/1.1 401 Unauthorized
 *     {
 * 	 	"success": false,
 *       "error": "WrongPassword"
 *     }
 * 
 * @apiError BodyEmpty The Body of the Request is empty
 *
 * @apiErrorExample BodyEmpty:
 *     HTTP/1.1 400 Bad Request
 *     {
 * 	 	"success": false,
 *       "error": "BodyEmpty"
 *     }
 * 
 * @apiError MissingArgument An argument of the request is missing
 *
 * @apiErrorExample MissingArgument:
 *     HTTP/1.1 400 Bad Request
 *     {
 * 	 	"success": false,
 *       "error": "MissingArgument"
 *     }
 * 
 */

module.exports = 
function (req, res) {
	if (!req.body) {
		res.status(400);
		res.json({ success: false, error: 'BodyEmpty' });
	} else if (!req.body.email || !req.body.password) {
		console.log(req.body);
		res.status(400);
		res.json({ success: false, error: 'MissingArgument' });
	} else {
		User.findOne({
			email: req.body.email
		}, function (err, user) {
			if (err) throw err;
	
			if (!user) {
				res.status(404).send({ success: false, error: 'UserNotFound' });
			} else {
				// check if password matches
				bcrypt.compare(req.body.password, user.password, function(err, isMatch) {
					if (isMatch) {
						// if user is found and password is right create a token
						var token = jwt.sign(user.toJSON(), config.secret);
						// return the information including token as JSON
						res.json({ success: true, token: 'JWT ' + token });
					} else {
						res.status(404).send({ success: false, error: 'WrongPassword' });
					}
				});
			}
		});
	}
};