const config = require('../../../config/database');
const jwt = require('jsonwebtoken');
const log = require('../../log');
const Manager = require('../../../models/manager');
const moment = require('moment');
const bcrypt = require('bcrypt');

/**
 * @api {post} /auth/manger/edit Edit Manager Infos
 * @apiName editManagerInfo.js Manager Infos
 * @apiGroup Auth
 *
 * @apiParam {String} token The manager token
 *
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} token The new token generated
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
 * @apiErrorExample CompanyAlreadyExist:
 *     HTTP/1.1 400 Bad Request
 *     {
 * 	 "success": false,
 *       "error": "CompanyAlreadyExist"
 *     }
 */

module.exports =
     function (req, res) {
        if (!req.body) {
            log("Body is empty", "INFO", "editManagerInfo.js.js");
            res.status(400);
            return res.json({ success: false, error: 'BodyEmpty' });
        } else if (!req.body.token) {
            log("Missing arguments", "INFO", "editManagerInfo.js.js");
            console.log(req.body);
            res.status(400);
            return res.json({ success: false, error: 'MissingArgument' });
        } else {
            jwt.verify(req.body.token, config.secret, async function(err, decoded){
                if (err) {
                    log("Invalid Token", "INFO", "editManagerInfo.js.js");
                    res.status(400);
                    return res.json({ success: false, error: 'InvalidToken' });
                }
                else {
                    if (req.body.company && req.body.company != "")
                    {
                        let manager = await Manager.findOne({
                            company: req.body.company
                        });
                        if (manager)
                        {
                            res.status(400);
                            return res.json({success: false, error: 'CompanyAlreadyExist'});
                        }

                    }

                    Manager.findOne({
                        email: decoded.email
                    }, function(err, manager) {
                        if (err ||!manager) {
                            log(err, "ERROR", "editManagerInfo.js.js");
                            res.status(500);
                            return res.json({success: false, error: 'ApiInternalError'});
                        }

                        if (req.body.email && req.body.email != "")
                        {
                            manager.email = req.body.email;
                        }

                        if (req.body.name && req.body.name != "")
                        {
                            manager.name = req.body.name;
                        }

                        if (req.body.password && req.body.password != "")
                        {
                            let reg = new RegExp("(?=.*[A-z])(?=.*[0-9])(?=.{8,})");

                            if (!reg.test(req.body.password)) {
                                log("Password is weak", "INFO", "editManagerInfo.js.js");
                                res.status(400);
                                return res.json({success: false, error: 'PasswordIsWeak'});
                            }
                            else
                            {
                                bcrypt.hash(req.body.password, 10, function(err, hash) {
                                    manager.password = hash;
                                    manager.save(function(err, user) {
                                        if (err) {
                                            log(err, "ERROR", "editManagerInfo.js.js");
                                            res.status(500);
                                            return res.json({success: false, error: 'APIInternalError'});
                                        }
                                        log(user, 'ERROR', "editManagerInfo.js.js");

                                        res.status(200);
                                        let token = jwt.sign(user.toJSON(), config.secret);
                                        return res.json({ success: true, token: token});
                                    });
                                });
                            }
                        }
                        else
                        {
                            manager.save(function(err, manager) {
                                if (err) {
                                    log(err, "ERROR", "editManagerInfo.js.js");
                                    res.status(500);
                                    return res.json({success: false, error: 'APIInternalError'});
                                }
                                log(manager, 'INFO', "editManagerInfo.js.js");
                                res.status(200);
                                let token = jwt.sign(manager.toJSON(), config.secret);
                                return res.json({ success: true, token: token});
                            });
                        }
                    })
                };
            });
        }
    }