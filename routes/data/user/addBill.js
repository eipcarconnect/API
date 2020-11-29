

const config = require('../../../config/database');
const jwt = require('jsonwebtoken');
const log = require('../../log');
const User = require('../../../models/user');
const Ride = require('../../../models/ride');
const Bill = require('../../../models/bill');

/**
 * @api {post} /data/user/addbill Add Bill
 * @apiName Add Bill
 * @apiGroup Data
 *
 * @apiParam {String} token The user token
 * @apiParam {String} rideId The if of the ride
 * @apiParam {Number} priceTTC The full price
 * @apiParam {Number} priceHT The price without taxes
 * @apiParam {String} name The name of the bill
 * @apiParam {String} type The type of bill
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
 *
 * @apiError InvalidToken The token provided is invalid
 *
 * @apiErrorExample Ride Not Found:
 *     HTTP/1.1 404 Bad Request
 *     {
 * 	 "success": false,
 *       "error": "RideNotFound"
 *     }
 */

module.exports =
    function (req, res) {
        if (!req.body) {
            log("Body is empty", "INFO", "addRide.js");
            res.status(400);
            return res.json({ success: false, error: 'BodyEmpty' });
        } else if (!req.body.token || !req.body.rideId || !req.body.priceTTC || !req.body.priceHT || !req.body.name || !req.body.type) {
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
                    }, async function(err, user) {
                        if (!user) {
                            log("Invalid Token", "ERROR", "addRide.js");
                            res.status(500);
                            return res.json({success: false, error: 'InvalidToken'});
                        }
                        else {

                            let ride = await Ride.findById(req.body.rideId);
                            if (!ride)
                            {
                                return res.status(404).json({success: false, error: 'RideNotFound'})
                            }

                            let newBill = new Bill({
                                name: req.body.name,
                                company: ride.company,
                                rideId: req.body.rideId,
                                priceTTC: req.body.priceTTC,
                                priceHT: req.body.priceHT,
                                type: req.body.type
                            })
                            newBill.save(function(err, saved) {
                                if (err) {
                                    log(err, "ERROR", "addRide.js");
                                    res.status(500);
                                    return res.json({success: false, error: 'APIInternalError'});
                                }
                                log("Bill created", "INFO", "addRide.js");
                                console.log(saved);
                                res.status(200);
                                return res.json({
                                    success: true,
                                    msg: "Bill created with success"
                                });
                            });

                        }
                    });

                }
            });
        }
    }