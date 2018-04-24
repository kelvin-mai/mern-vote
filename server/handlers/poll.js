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

exports.usersPolls = async (req, res, next) => {
	const { id } = req.decoded;
	try {
		const user = await db.User.findById(id).populate('polls');

		return res.status(200).json(user.polls);
	} catch (err) {
		return next({
			status: 400,
			message: err.message
		});
	}
};

exports.createPoll = async (req, res, next) => {
	const { id } = req.decoded;
	const { question, options } = req.body;

	try {
		const user = await db.User.findById(id);

		const newPoll = { question, user, options: [] };
		options.forEach(option => {
			newPoll.options.push({ option, votes: 0 });
		});
		const poll = await db.Poll.create(newPoll);
		user.polls.push(poll._id);
		await user.save();

		return res.status(201).json(poll);
	} catch (err) {
		return next({
			status: 400,
			message: err.message
		});
	}
};

exports.vote = async (req, res, next) => {
	const { id: pollId } = req.params;
	const { id: userId } = req.decoded;
	const { answer } = req.body;
	try {
		if (answer) {
			const poll = await db.Poll.findById(pollId);

			const vote = poll.options.map(option => {
				if (option.option == answer) {
					return {
						option: option.option,
						_id: option._id,
						votes: option.votes + 1
					};
				} else {
					return option;
				}
			});

			if (poll.voted.filter(user => user.toString === userId).length > 0) {
				poll.voted.push(userId);
				poll.options = vote;
				await poll.save();

				return res.status(202).json(poll);
			} else {
				throw new Error('Already voted');
			}
		} else {
			throw new Error('No Answer Provided');
		}
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
	const { id: pollId } = req.params;
	const { id: userId } = req.decoded;
	try {
		const poll = await db.Poll.findById(pollId);
		if (poll.user.toString() !== userId) {
			throw new Error('Unauthorized access');
		}

		await poll.remove();
		return res.status(202).json({ poll, deleted: true });
	} catch (err) {
		return next({
			status: 400,
			message: err.message
		});
	}
};
