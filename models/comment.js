var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    mark: {
        type: Number,
        required: true	
	},
	title: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('Comment', CommentSchema);