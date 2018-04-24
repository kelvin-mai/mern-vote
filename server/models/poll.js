const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
	option: String,
	votes: Number
});

const pollSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	created: {
		type: Date,
		default: Date.now
	},
	options: [optionSchema],
	voted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Poll', pollSchema);
