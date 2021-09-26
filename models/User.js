const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: [true, 'Please enter a username of your choice'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Please enter an email'],
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\wa-z\.-]+)\.([a-z\.]{2,8})$/, 'Please enter an email address that meets specifications']
        },
        password: {
            type: String,
            required: [true, 'You must choose a password'],
            unique: true,
            match: [/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,})$/, 'Please choose a password that has at least one letter, one number, one special character and is as least eight characters long']
        },
    }
);

const User = model('User', UserSchema)

module.exports = User;