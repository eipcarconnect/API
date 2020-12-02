var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VehicleSchema = new Schema({
    company: {
        type: String,
        required: true
	},
	model: {
    	type: String,
		required: true
	},
	licencePlate: {
    	type: String,
		required: true
	},
	kilometer: {
    	type: Number,
		required : true
	},
	fuel: {
    	type: Number,
		required: true
	},
	pressure: {
    	type: Number,
		required: true
	},
	oil: {
    	type: Number,
		required: true
	},
	battery: {
    	type: Number,
		required: true
	},
	brakeUsage: {
    	type: Number,
		required: true
	}
})

module.exports = mongoose.model('Vehicle', VehicleSchema);