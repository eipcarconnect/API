const config = require('../../../config/database');
const jwt = require('jsonwebtoken');
const log = require('../../log');
const Manager = require('../../../models/manager');
const Ride = require('../../../models/ride');
const User = require('../../../models/user');
const Vehicle = require('../../../models/vehicle');

/**
 * @api {post} /data/manager/getrides Get Rides Manager
 * @apiName Get Rides
 * @apiGroup Data
 *
 * @apiParam {String} token The manager token
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
 *				vehicle: "licence Plate",
 *				user: "Jean",
 *				start: "start address",
 *				end: "end address",
 *			    date: "01/01/1998"
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
                    Manager.findOne({
                        email: decoded.email
                    }, function(err, manager) {
                        if (!manager) {
                            log("Invalid Token", "ERROR", "getrides.js");
                            res.status(500);
                            return res.json({success: false, error: 'InvalidToken'});
                        }
                        else {
                            Ride.find ({
                                company: manager.company
                            }, async function(err,rides) {
                                if (err)
                                    res.status(500).send();
                                if (rides) {

                                    for(let i = 0; i < rides.length; i++)
                                    {
                                        if (rides[i].userId && rides[i].userId != "") {
                                            let user = await User.findById(rides[i].userId);
                                            if (user)
                                            {
                                                delete rides[i].userId;
                                                rides[i].user = user.name;
                                            }
                                        }
                                    }

                                    log("Ride Info successfully retrieved", "INFO", "getrides.js");
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
