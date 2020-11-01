var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VehicleSchema = new Schema({
    ownerId: {
        type: String,
        required: true
	},
	model: {
		type: String,
		required: false
	},
	speed: {
		type: Number,
		required: false
	},
	fuel: {
		type: Number,
		required: false
	},
	battery: {
		type: Number,
		required : false
	},
	latitude: {
		type: Number,
		required: false
	},
	longitude: {
		type: Number,
		required: false
	},
	globalState: {
		type: String,
		required: false
	}
})

module.exports = mongoose.model('Vehicle', VehicleSchema);