const Manager = require('../../models/manager');
const jwt = require('jsonwebtoken');
const config = require('../../config/database');
const uniqid = require('uniqid');
const bcrypt = require('bcrypt');
const moment = require('moment')
const log = require('../log');

/**
 * @api {post} /auth/manager/signup SignUp a new Manager
 * @apiName Manager SignUp
 * @apiGroup Auth
 *
 * @apiParam {String} name Manager last name and first name.
 * @apiParam {String} username Manager unique email.
 * @apiParam {String} password Manager password.
 * @apiParam {String} birthdate Manager birthdate written in YYYY-MM-DD format.
 * @apiParam {String} company The company name must be unique.
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
 * @apiError APIInternalError An error occured within the API please contact the admin
 *
 * @apiErrorExample APIInternalError:
 *     HTTP/1.1 500 Internal Error
 *     {
 * 	 "success": false,
 *       "error": "APIInternalError"
 *     }
 * @apiError CompanyExist The Company already exist
 *
 * @apiErrorExample CompanyExist:
 *     HTTP/1.1 400 Internal Error
 *     {
 * 	 "success": false,
 *       "error": "CompanyExist"
 *     }
 */

module.exports =
    function(req, res) {
        if (!req.body) {
            log("Body is empty", "ERROR", "managerSignup.js");
            res.status(400);
            res.json({success: false, error: 'BodyEmpty'});
        } else if (!req.body.name || !req.body.email || !req.body.password || !req.body.birthdate || !req.body.company) {
            log("Missing argument", "ERROR", "managerSignup.js");
            res.status(400);
            res.json({success: false, error: 'MissingArgument'});
        } else {
            Manager.findOne({
                email: req.body.email
            }, function(err, manager) {
                if (manager) {
                    res.status(400);
                    log("Manager already exist", "ERROR", "managerSignup.js");
                    return res.json({success: false, error: 'ManagerAlreadyExist'});
                }
                else {
                    let reg = new RegExp("(?=.*[A-z])(?=.*[0-9])(?=.{8,})");

                    if (!reg.test(req.body.password)) {
                        log("Password is weak", "ERROR", "managerSignup.js");
                        res.status(400);
                        return res.json({success: false, error: 'PasswordIsWeak'});
                    }
                    Manager.findOne({company: req.body.company}, function (err, manager) {
                        if (manager)
                        {
                            res.status(400);
                            log("Company already exist", "ERROR", "managerSignup.js");
                            return res.json({success: false, error: "CompanyExist"});
                        }

                        log("Creating New Manager", "INFO", "managerSignup.js");

                        bcrypt.hash(req.body.password, 10, function(err, hash) {
                            let newManager = new Manager({
                                name: req.body.name,
                                email: req.body.email,
                                password: hash,
                                id: uniqid(),
                                birthdate: moment().format(req.body.birthdate),
                                company: req.body.company
                            });

                            console.log(newManager);


                            newManager.save(function(err, manager) {
                                if (err) {
                                    log(err, "ERROR", "managerSignup.js");
                                    res.status(500);
                                    return res.json({success: false, error: 'APIInternalError'});
                                }
                                log("Manager created with success", "INFO", "managerSignup.js");
                                res.status(200);
                                let token = jwt.sign(manager.toJSON(), config.secret);
                                // return the information including token as JSON
                                res.json({ success: true, token: token });
                            });
                        });
                    })
                }
            })

        }
    };

