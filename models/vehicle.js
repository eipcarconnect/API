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
	breakPressed: {
		type: Boolean,
		required: false
	},
	clutchPressed: {
		type: Boolean,
		required: false
	},
	speed: {
		type: Number,
		required: false
	},
	tempCoolant: {
		type: Number,
		required : false
	},
	tempEngine: {
		type: Number,
		required: false
	},
	licencePlate: {
    	type: String,
		required: true
	},
	kilometer: {
    	type: Number,
		required : false
	}


})

module.exports = mongoose.model('Vehicle', VehicleSchema);