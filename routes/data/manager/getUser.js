const config = require('../../../config/database');
const jwt = require('jsonwebtoken');
const log = require('../../log');
const Manager = require('../../../models/manager');
const User = require('../../../models/user');

/**
 * @api {post} /data/manager/getusers Get Users Manager
 * @apiName Get Users
 * @apiGroup Data
 *
 * @apiParam {String} token The manager token
 *
 * @apiSuccess {Boolean} success true
 * @apiSuccess {Array} rides An array of users of the company
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *			"success: true,
 *			"users": [
 *			 {
 *			 	_id: "id",
 *			  	company: "Total",
 *			    name: "Meet up with a client",
 *			 }
 *			]
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
            log("Body is empty", "INFO", "getUser.js");
            res.status(400);
            return res.json({ success: false, error: 'BodyEmpty' });
        } else if (!req.body.token) {
            log("Body is empty", "INFO", "getUser.js");
            console.log(req.body);
            res.status(400);
            return res.json({ success: false, error: 'MissingArgument' });
        } else {
            jwt.verify(req.body.token, config.secret, function(err, decoded){
                if (err) {
                    log("Invalid Token", "INFO", "getUser.js");
                    res.status(400);
                    return res.json({ success: false, error: 'InvalidToken' });
                }
                else {
                    Manager.findOne({
                        email: decoded.email
                    }, function(err, manager) {
                        if (!manager) {
                            log("Invalid Token", "ERROR", "getUser.js");
                            res.status(500);
                            return res.json({success: false, error: 'InvalidToken'});
                        }
                        else {
                            User.find ({
                                company: manager.company
                            }, async function(err,user) {
                                if (err)
                                    res.status(500).send();
                                if (user) {

                                    log("User Info successfully retrieved", "INFO", "getUser.js");
                                    res.status(200);
                                    return res.json({
                                        success: true,
                                        users: user
                                    });
                                }
                            })
                        }
                    });
                }
            });
        }
    }
