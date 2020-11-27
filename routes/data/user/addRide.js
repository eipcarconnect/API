const config = require('../../../config/database');
const jwt = require('jsonwebtoken');
const log = require('../../log');
const User = require('../../../models/user');
const Ride = require('../../../models/ride');
const moment = require('moment')

/**
 * @api {post} /data/user/addride Add Ride
 * @apiName Add Ride
 * @apiGroup Data
 *
 * @apiParam {String} token The user token
 * @apiParam {String} id The id of the vehicle
 * @apiParam {String} start The start address of the ride
 * @apiParam {String} end The end of the ride
 * @apiParam {String} name The name of the ride
 * @apiParam {String} date The date of the ride
 *
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} msg The message of success
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *			"success": true,
 *			msg: "Ride created with success"
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
            log("Body is empty", "INFO", "addRide.js");
            res.status(400);
            return res.json({ success: false, error: 'BodyEmpty' });
        } else if (!req.body.token || !req.body.id || !req.body.start || !req.body.end || !req.body.name || !req.body.date) {
            log("Missing Arguments", "INFO", "addRide.js");
            console.log(req.body);
            res.status(400);
            return res.json({ success: false, error: 'MissingArgument' });
        } else {
            jwt.verify(req.body.token, config.secret, function(err, decoded){
                if (err) {
                    log("Invalid Token", "INFO", "addRide.js");
                    res.status(400);
                    return res.json({ success: false, error: 'InvalidToken' });
                }
                else {
                    User.findOne({
                        email: decoded.email
                    }, function(err, user) {
                        if (!user) {
                            log("Invalid Token", "ERROR", "addRide.js");
                            res.status(500);
                            return res.json({success: false, error: 'InvalidToken'});
                        }
                        else {

                            let newRide = new Ride({
                                name: req.body.name,
                                company: user.company,
                                userId: user._id,
                                vehicleId: req.body.id,
                                start: req.body.start,
                                end: req.body.end,
                                date: req.body.date
                            })
                            newRide.save(function(err, saved) {
                                if (err) {
                                    log(err, "ERROR", "addRide.js");
                                    res.status(500);
                                    return res.json({success: false, error: 'APIInternalError'});
                                }
                                log("Ride created", "INFO", "addRide.js");
                                console.log(saved);
                                res.status(200);
                                return res.json({
                                    success: true,
                                    msg: "Ride created with success"
                                });
                            });

                        }
                    });

                }
            });
        }
    }