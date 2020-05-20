var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VehicleSchema = new Schema({
    ownerId: {
        type: String,
        required: true
	},
	speed: {
		type: Number,
		required: false
	},
	fuel: {
		type: Date,
		required: false
	},
	lattitude: {
		type: String,
		required: false
	},
	longitude: {
		type: Object,
		required: false
	}
})

module.exports = mongoose.model('Vehicle', VehicleSchema);