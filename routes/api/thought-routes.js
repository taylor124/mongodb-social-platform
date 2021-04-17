const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    addThought,
    addReaction,
    updateThought,
    removeThought
} = require('../../controllers/thought-controller');

router.route('/')
    .get(getAllThought)

router
    .route('/:userId')
    .get(getThoughtById)
    .post(addThought)
    .put(updateThought)
    .delete(removeThought);

router
    .route('/reactions/:thoughtId')
    .post(addReaction)

module.exports = router;