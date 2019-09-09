
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const config = require('../../config/database');
const uniqid = require('uniqid');
const bcrypt = require('bcrypt');

/**
 * @api {post} /auth/signup SignUp a new User
 * @apiName SignUp
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
 *	"success": true,
 *       "msg": "JWT TokenHere"
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
 */

module.exports = 
function(req, res) {
	if (!req.body) {
		res.status(400);
		res.json({success: false, error: 'BodyEmpty'});
	} else if (!req.body.name || !req.body.email || !req.body.password || !req.body.birthdate) {
		console.log(req.body);
		res.status(400);
		res.json({success: false, error: 'MissingArgument'});
	} else {
		console.log("Creating New User");
		bcrypt.hash(req.body.password, 10, function(err, hash) {
			var newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: hash,
				id: uniqid(),
				birthdate: req.body.birthdate
			});
			
			newUser.save(function(err, user) {
				if (err) {
					console.log("Error :", err);
					console.log("Body :", req.body);
					res.status(400);
					return res.json({success: false, error: 'UserAlreadyExist'});
				}
				res.status(200);
				var token = jwt.sign(user.toJSON(), config.secret);
				// return the information including token as JSON
				res.json({ success: true, token: 'JWT ' + token });
			});
		  });		
		
	}
};

      