var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CollisionSchema = new Schema({
    date: {
        type: Date,
        required: true
	},
	position: {
		type: Object,
		required: true
	},
	media: {
		type: Object,
		required: true
	}
})

module.exports = mongoose.model('Collision', CollisionSchema);