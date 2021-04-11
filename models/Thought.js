const { Schema, model, Types } = require('mongoose');
const dateFormat = require('dateformat');

const ThoughtSchema = new Schema(
    {
        // field belonging to the thought; Used to differ the comments from one thought to another
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // more here later ...
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema]
    }
);

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;