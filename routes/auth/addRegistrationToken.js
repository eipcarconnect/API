const config = require('../../config/database');
const jwt = require('jsonwebtoken');
const log = require('../log');
const User = require('../../models/user');

module.exports = 
function (req, res) {
	if (!req.body) {
		log("Body is empty", "INFO", "getvehiculeinfo.js");
		res.status(400);
		return res.json({ success: false, error: 'BodyEmpty' });
	} else if (!req.body.token || !req.body.registrationToken) {
		log("Body is empty", "INFO", "getvehiculeinfo.js");
		console.log(req.body);
		res.status(400);
		return res.json({ success: false, error: 'MissingArgument' });
	} else {
		jwt.verify(req.body.token, config.secret, function(err, decoded){
			if (err) {
				log("Invalid Token", "INFO", "getvehiculeinfo.js");
				res.status(400);
				return res.json({ success: false, error: 'InvalidToken' });
			}
			else {
				User.findOne({
                    email: decoded.email
                }, function(err, user) {
                    if (!user) {
                        log("Invalid Token", "ERROR", "getvehiculeinfo.js");
                        res.status(500);
                        return res.json({success: false, error: 'InvalidToken'});
					}
					else {
						user.registrationToken = req.body.registrationToken;
						user.save(function(err, user) {
							if (err) 
								return console.debug(err);
							else 
								return res.status(200).json({success: true, msg: "The token was added sucessfully"});
						})
					}
				});
				
			}
		});
	}
}