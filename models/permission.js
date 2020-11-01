var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PermissionSchema = new Schema({
    idUser: {
        type: String,
        required: true
	},
	idVehicle: {
		type: String,
		required: true
	},
	seePosition: {
		type: Boolean,
		required: true
	},
	seeLastSeen: {
		type: Boolean,
		required: true
	},
	seeData: {
		type: Boolean,
		required: true
	}
	
})

module.exports = mongoose.model('Permission', PermissionSchema);