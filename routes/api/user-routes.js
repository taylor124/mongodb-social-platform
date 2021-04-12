
const router = require('express').Router();
const User = require('../../models/User');

router.get('/users', (req, res) => {
    User.findAll({
        where: {
            // use the ID from the session
            _id: req.session.user_id
        },
        attributes: [
            'username',
            'email',
            'thoughts',
            'friends'
        ],
        include: [
            {
                model: 'Thought',
                attributes: ['thoughtText', 'reactions'],
                include: {
                    model: 'Reaction',
                    attributes: ['reactionId', 'reactionBody', 'createdAt']
                }
            }
        ]
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/users/:id', (req, res) => {
    User.findOne({
        where: {
            // use the ID from the session
            _id: req.params.id
        },
        attributes: [
            'username',
            'email',
            'thoughts',
            'friends'
        ],
        include: [
            {
                model: 'Thought',
                attributes: ['thoughtText', 'reactions'],
                include: {
                    model: 'Reaction',
                    attributes: ['reactionId', 'reactionBody', 'createdAt']
                }
            }
        ]
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router