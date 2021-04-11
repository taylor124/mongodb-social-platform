const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        // field belonging to the user; Used to differ the comments from one user to another
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: (email) => {
                    return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
                },
                message: 'Email not valid, Please try again.'
            }
        },
        thoughts: {
            references: {
                model: 'Thought',
                key: '_id'
            }
        },
        friends: {
            references: {
                model: 'User',
                key: '_id'
            }
        }
    }
);

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;