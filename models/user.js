const mongoose = require('mongoose')
const passportlocalmongoose = require('passport-local-mongoose').default

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

userSchema.plugin(passportlocalmongoose, {
    usernameField: "email"
});
const User = mongoose.model("Use", userSchema)

module.exports = User;