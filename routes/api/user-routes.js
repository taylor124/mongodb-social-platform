const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    deleteUser,
    addFriend
} = require('../../controllers/user-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllUser)
    .post(createUser)

// /api/thoughts/:id
router
    .route('/:id')
    .get(getUserById)
    .put(addFriend)
    .delete(deleteUser)

module.exports = router;