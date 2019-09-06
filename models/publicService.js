var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var publicServiceSchema = new Schema({
    name: {
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
	seeOwner: {
		type: Boolean,
		required: true
	},
	seeUsers: {
		type: Boolean,
		required: true
	},
	seeData: {
		type: Boolean,
		required: true
	}
})

module.exports = mongoose.model('PublicService', publicServiceSchema);