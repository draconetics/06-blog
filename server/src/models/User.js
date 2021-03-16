const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const {validateEmail} = require('../_helpers/util');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    firstname:{
        type: String,
        trim: true
    },
    lastname:{
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validateEmail(value)) {
                throw new Error({error: 'Invalid Email address'});
            }
        }
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 3
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User