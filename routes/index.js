const router = require('express').Router();
const user = require('./api/user-routes');
const thought = require('./api/thought-routes');

router.use('/api/thoughts', thought)
router.use('/api/users', user)

module.exports = router;