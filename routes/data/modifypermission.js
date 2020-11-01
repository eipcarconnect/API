const config = require('../../config/database');
const jwt = require('jsonwebtoken');
const log = require('../log');
const User = require('../../models/user');
const Permission = require('../../models/permission');

/**
 * @api {post} /data/modifypermission Get Vehicule Info
 * @apiName Get Vehicule Info
 * @apiGroup Data
 *
 *
 * @apiParam {String} token The user token
 * @apiParam {String} idUser The user id whow ants to have the permission
 * @apiParam {String} idVehicle the id of the vehicle
 * @apiParam {bool} seeLastSeen Does the user has permission to see when the vehicle was last seen ?
 * @apiParam {bool} seePosition Does the user has permission to see where the vehicle is ?
 * @apiParam {bool} seeData Does the user has permission to dee the data of the vehicle ?
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *			"success: true, 
 *			"speed": "10", 
 *			"fuel": "45",
 *			"latitude": "46.510492",
 *			"longitude": "3.533891",
 *			"globalState": "Good"
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
		log("Body is empty", "INFO", "modifypermission.js");
		res.status(400);
		return res.json({ success: false, error: 'BodyEmpty' });
	} else if (!req.body.token || !req.body.idUser || !req.body.idVehicle) {
		log("Missing arguments", "INFO", "modifypermission.js");
		console.log(req.body);
		res.status(400);
		return res.json({ success: false, error: 'MissingArgument' });
	} else {
		jwt.verify(req.body.token, config.secret, function(err, decoded){
			if (err) {
				log("Invalid Token", "INFO", "modifypermission.js");
				res.status(400);
				return res.json({ success: false, error: 'InvalidToken' });
			}
			else {
                Permission.findOne({
					idUser: req.body.idUser,
					idVehicle: req.body.idVehicle
                }, function(err, permission) {
                    if (err ||!permission) {
                        log(err, "ERROR", "modifypermission.js");
                        res.status(500);
                        return res.json({success: false, error: 'ApiInternalError'});
                    }

                    if (req.body.seeLastSeen != undefined) 
                    {
                        permission.seeLastSeen = req.body.seeLastSeen;
                    }

                    if (req.body.seePosition != undefined)
                    {
                        permission.seePosition = req.body.seePosition;
                    }

                    if (req.body.seeData != undefined)
                    {
                        permission.seeData = req.body.seeData;
                    }
   
                  
					permission.save(function(err, permission) {
						if (err) {
							log(err, "ERROR", "modifypermission.js");
							res.status(500);
							return res.json({success: false, error: 'APIInternalError'});
						}
						log(permission, 'INFO', "modifypermission.js");
						res.status(200);
						return res.json({success: true, msg: "Permission modified with success"});
					});
                })
		    };
	    });
    }
}