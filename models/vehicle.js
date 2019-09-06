var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VehicleSchema = new Schema({
    ownerId: {
        type: String,
        required: true
	},
	lastPosition: {
		type: Object,
		required: false
	},
	lastSeen: {
		type: Date,
		required: false
	},
	id: {
		type: String,
		required: false
	},
	data: {
		type: Object,
		required: false
	},
	lastCollision: {
		type: Object,
		required: false
	}
	
})

module.exports = mongoose.model('Vehicle', VehicleSchema);