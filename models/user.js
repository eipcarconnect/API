var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        required: true
	},
	permissionId: {
		type: Array,
		required: false
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	registrationToken: {
		type: Object,
		required: false
	},
	company: {
    	type: String,
		required: true
	}
})

module.exports = mongoose.model('User', UserSchema);