const config = require('../../config/database');
const jwt = require('jsonwebtoken');


module.exports = 
function (req, res) {
	if (!req.body) {
		res.status(400);
		return res.json({ success: false, error: 'BodyEmpty' });
	} else if (!req.body.token) {
		console.log(req.body);
		res.status(400);
		return res.json({ success: false, error: 'MissingArgument' });
	} else {
		jwt.verify(req.body.token, config.secret, function(err, decoded){
			if (err) {
				res.status(400);
				return res.json({ success: false, error: 'InvalidToken' });
			}
			else {
				res.status(200);
				return res.json({ 
					success: true, 
					name: decoded.name, 
					email: decoded.email,
					birthdate: decoded.birthdate
				 });
			}
		});
	}
}