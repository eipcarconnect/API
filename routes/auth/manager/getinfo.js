const config = require('../../../config/database');
const jwt = require('jsonwebtoken');
const log = require('../../log');
const Manager = require('../../../models/manager');

/**
 * @api {post} /auth/manager/getinfo Get Manager Infos
 * @apiName Get Manager Infos
 * @apiGroup Auth
 *
 * @apiParam {String} token The manager token
 *
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} name  The name of the manager
 * @apiSuccess {String} email  The email address of the manager
 * @apiSuccess {String} company The company of the manager
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *			"success: true,
 *			"name": "name",
 *			"email": "email@address",
 *		    "company": "company name"
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
            log("Body is empty", "INFO", "getinfo.js");
            res.status(400);
            return res.json({ success: false, error: 'BodyEmpty' });
        } else if (!req.body.token) {
            log("MissingArgument", "INFO", "getinfo.js");
            console.log(req.body);
            res.status(400);
            return res.json({ success: false, error: 'MissingArgument' });
        } else {
            jwt.verify(req.body.token, config.secret, function(err, decoded){
                if (err) {
                    log("Invalid Token", "INFO", "getinfo.js");
                    res.status(400);
                    return res.json({ success: false, error: 'InvalidToken' });
                }
                else {
                    Manager.findOne({
                        email: decoded.email
                    }, function(err, user) {
                        if (!user) {
                            log("Invalid Token !", "ERROR", "getinfo.js");
                            res.status(500);
                            return res.json({success: false, error: 'InvalidToken'});
                        }
                        else {
                            log("Info successfully retrieved", "INFO", "getinfo.js");
                            res.status(200);
                            return res.json({
                                success: true,
                                name: user.name,
                                email: user.email,
                                company: user.company
                            });
                        }
                    });

                }
            });
        }
    }
