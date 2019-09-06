var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PositionSchema = new Schema({
    latitude: {
        type: String,
        required: true
	},
	longitude: {
		type: String,
		required: true
	}	
})

module.exports = mongoose.model('Position', PositionSchema);