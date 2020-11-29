const config = require('../../config/database');
const log = require('../log');
const Bill = require('../../models/bill');

/**
 * @api {post} /data/getbills Get Bills
 * @apiName Get Bills
 * @apiGroup Data
 *
 * @apiParam {String} rideId The id of the Ride
 *
 * @apiSuccess {Boolean} success true
 * @apiSuccess {Array} vehicles An array of vehicles belonging to the company
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *			"success: true,
 *			"bills": [
 *			 {
 *			 	_id: "id",
 *			 	name: "name"
 *			  	company: "Total",
 *			    rideId: "id",
 *				priceTTC: 20,
 *				priceHT: 15,
 *				type: "Restaurant"
 *			 }
 *			]
 *     }
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
 */

module.exports =
    function (req, res) {
        if (!req.body) {
            log("Body is empty", "INFO", "getBills.js");
            res.status(400);
            return res.json({ success: false, error: 'BodyEmpty' });
        } else if (!req.body.rideId) {
            log("Body is empty", "INFO", "getBills.js");
            console.log(req.body);
            res.status(400);
            return res.json({ success: false, error: 'MissingArgument' });
        } else {
            Bill.find ({
                rideId: req.body.rideId
            }, function(err,bills) {
                if (err)
                    res.status(500).send();
                if (bills) {
                    log("Bill Info successfully retrieved", "INFO", "getBills.js");
                    res.status(200);
                    return res.json({
                        success: true,
                        bills: bills
                    });
                }
            })

        }
    }

