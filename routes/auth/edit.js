const config = require('../../config/database');
const jwt = require('jsonwebtoken');
const log = require('../log');
const User = require('../../models/user');
const moment = require('moment');
const bcrypt = require('bcrypt');

/**
 * @api {post} /auth/edit Edit User Infos
 * @apiName Edit User Infos
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
		log("Body is empty", "INFO");
		res.status(400);
		return res.json({ success: false, error: 'BodyEmpty' });
	} else if (!req.body.token) {
		log("Missing arguments", "INFO");
		console.log(req.body);
		res.status(400);
		return res.json({ success: false, error: 'MissingArgument' });
	} else {
		jwt.verify(req.body.token, config.secret, function(err, decoded){
			if (err) {
				log("Invalid Token", "INFO");
				res.status(400);
				return res.json({ success: false, error: 'InvalidToken' });
			}
			else {
                User.findOne({
                    email: decoded.email
                }, function(err, user) {
                    if (err) {
                        log(err, "ERROR");
                        res.status(500);
                        return res.json({success: false, error: 'UserNotFound'});
                    }

                    if (req.body.email && req.body.email != "") 
                    {
                        user.email = req.body.email;
                    }

                    if (req.body.name && req.body.name != "")
                    {
                        user.name = req.body.name;
                    }

                    if (req.body.birthdate && req.body.birthdate != "")
                    {
                        user.birthdate = moment().format(req.body.birthdate);
                    }
   
                    if (req.body.password && req.body.password != "")
                    {
                        let reg = new RegExp("(?=.*[A-z])(?=.*[0-9])(?=.{8,})");
                        
                        if (!reg.test(req.body.password)) {
                            log("Password is weak", "INFO");
                            res.status(400);
                            return res.json({success: false, error: 'PasswordIsWeak'});
                        }
                        else
                        {
                            bcrypt.hash(req.body.password, 10, function(err, hash) {
                                user.password = hash;
                                user.save(function(err, user) {
                                    if (err) {
                                        log(err, "ERROR");
                                        res.status(500);
                                        return res.json({success: false, error: 'APIInternalError'});
                                    }
                                    log(user, 'ERROR');

                                    res.status(200);
                                    return res.json({ success: true, msg: "Information successfully modified"});
                                });
                            });
                        }
                    }
                    else 
                    {
                        user.save(function(err, user) {
                            if (err) {
                                log(err, "ERROR");
                                res.status(500);
                                return res.json({success: false, error: 'APIInternalError'});
                            }
                            log(user, 'INFO');
                            res.status(200);
                            return res.json({ success: true, msg: "Information successfully modified"});
                        });
                    }
                })
		    };
	    });
    }
}