const router = require('express').Router();
const handle = require('../handlers');

router.route('/').get(handle.showPolls);

router.route('/new').post();

router
	.route('/:id')
	.get(handle.getPoll)
	.delete(handle.deletePoll);

module.exports = router;
