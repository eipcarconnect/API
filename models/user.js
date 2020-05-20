var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        required: true
	},
	id: {
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
	birthdate: {
		type: Date,
		required: true
	},
	registrationToken:  {
		type: String,
		required: false
	}
})

module.exports = mongoose.model('User', UserSchema);