var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InsurerSchema = new Schema({
    name: {
        type: String,
        required: true
	},
	idUsers: {
		type: Array,
		required: false
	}
	
})

module.exports = mongoose.model('Insurer', InsurerSchema);