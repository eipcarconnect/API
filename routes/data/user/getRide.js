const config = require('../../../config/database');
const jwt = require('jsonwebtoken');
const log = require('../../log');
const Ride = require('../../../models/ride');
const User = require('../../../models/user');

/**
 * @api {post} /data/user/getrides Get Rides User
 * @apiName Get Rides
 * @apiGroup Data
 *
 * @apiParam {String} token The user token
 *
 * @apiSuccess {Boolean} success true
 * @apiSuccess {Array} rides An array of rides belonging to the company
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *			"success: true,
 *			"rides": [
 *			 {
 *			 	_id: "id",
 *			  	company: "Total",
 *			    name: "Meet up with a client",
 *				vehicleId: "id",
 *				userId: "id",
 *				start: "start address",
 *				end: "end address"
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
            log("Body is empty", "INFO", "getrides.js");
            res.status(400);
            return res.json({ success: false, error: 'BodyEmpty' });
        } else if (!req.body.token) {
            log("Body is empty", "INFO", "getrides.js");
            console.log(req.body);
            res.status(400);
            return res.json({ success: false, error: 'MissingArgument' });
        } else {
            jwt.verify(req.body.token, config.secret, function(err, decoded){
                if (err) {
                    log("Invalid Token", "INFO", "getrides.js");
                    res.status(400);
                    return res.json({ success: false, error: 'InvalidToken' });
                }
                else {
                    User.findOne({
                        email: decoded.email
                    }, function(err, user) {
                        if (!user) {
                            console.log(err);
                            console.log(user);
                            log("Invalid Token", "ERROR", "getrides.js");
                            res.status(500);
                            return res.json({success: false, error: 'InvalidToken'});
                        }
                        else {
                            Ride.find ({
                                userId: user._id
                            }, async function(err,rides) {
                                if (err)
                                    res.status(500).send();
                                if (rides) {
                                    log("Rides Info successfully retrieved", "INFO", "getrides.js");
                                    res.status(200);
                                    return res.json({
                                        success: true,
                                        rides: rides
                                    });
                                }
                            })
                        }
                    });
                }
            });
        }
    }
