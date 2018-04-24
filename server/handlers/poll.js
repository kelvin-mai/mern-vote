const db = require('../models');

exports.showPolls = async (req, res, next) => {
	try {
		const polls = await db.Poll.find();
		return res.status(200).json(polls);
	} catch (err) {
		return next({
			status: 400,
			message: err.message
		});
	}
};

exports.getPoll = async (req, res, next) => {
	try {
		const { id } = req.params;
		const poll = await db.Poll.findById(id);
		return res.status(200).json(poll);
	} catch (err) {
		return next({
			status: 400,
			message: err.message
		});
	}
};

exports.deletePoll = async (req, res, next) => {
	try {
		const { id } = req.params;
		const poll = await db.Poll.findById(id);
		await poll.remove();
		return res.status(200).json({ ...poll, deleted: true });
	} catch (err) {
		return next({
			status: 400,
			message: err.message
		});
	}
};
