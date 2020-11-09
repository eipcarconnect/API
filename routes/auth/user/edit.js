const config = require('../../../config/database');
const jwt = require('jsonwebtoken');
const log = require('../../log');
const User = require('../../../models/user');
const Manager = require('../../../models/manager');
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
 * @apiSuccess {String} token The new Token generated
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *			"success": true, 
 *			"token" : "NewTokenHere"
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
 * @apiError PasswordIsWeak The password provided is weak
 *
 * @apiErrorExample PasswordIsWeak:
 *     HTTP/1.1 400 Bad Request
 *     {
 * 	 "success": false,
 *       "error": "PasswordIsWeak"
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
		log("Body is empty", "INFO", "edit.js");
		res.status(400);
		return res.json({ success: false, error: 'BodyEmpty' });
	} else if (!req.body.token) {
		log("Missing arguments", "INFO", "edit.js");
		console.log(req.body);
		res.status(400);
		return res.json({ success: false, error: 'MissingArgument' });
	} else {
		jwt.verify(req.body.token, config.secret, function(err, decoded){
			if (err) {
				log("Invalid Token", "INFO", "edit.js");
				res.status(400);
				return res.json({ success: false, error: 'InvalidToken' });
			}
			else {
                User.findOne({
                    email: decoded.email
                }, async function(err, user) {
                    if (err ||!user) {
                        log(err, "ERROR", "edit.js");
                        res.status(500);
                        return res.json({success: false, error: 'ApiInternalError'});
                    }

                    if (req.body.company && req.body.company != "")
                    {
                        let manager = await Manager.findOne({
                            company: req.body.company
                        });
                        if (!manager)
                        {
                            res.status(400);
                            return res.json({success: false, error: 'CompanyNotFound'});
                        }

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
                            log("Password is weak", "INFO", "edit.js");
                            res.status(400);
                            return res.json({success: false, error: 'PasswordIsWeak'});
                        }
                        else
                        {
                            bcrypt.hash(req.body.password, 10, function(err, hash) {
                                user.password = hash;
                                user.save(function(err, user) {
                                    if (err) {
                                        log(err, "ERROR", "edit.js");
                                        res.status(500);
                                        return res.json({success: false, error: 'APIInternalError'});
                                    }
                                    log(user, 'ERROR', "edit.js");

                                    res.status(200);
                                    let token = jwt.sign(user.toJSON(), config.secret);
                                    return res.json({ success: true, token: token});
                                });
                            });
                        }
                    }
                    else 
                    {
                        user.save(function(err, user) {
                            if (err) {
                                log(err, "ERROR", "edit.js");
                                res.status(500);
                                return res.json({success: false, error: 'APIInternalError'});
                            }
                            log(user, 'INFO', "edit.js");
                            res.status(200);
                            let token = jwt.sign(user.toJSON(), config.secret);
                            return res.json({ success: true, token: token});
                        });
                    }
                })
		    };
	    });
    }
}