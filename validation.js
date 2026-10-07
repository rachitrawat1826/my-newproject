const joi = require('joi')

const SigupSchema = joi.object({
    fullName: joi.string().min(5).max(15).required(),
    email: joi.string().email().required(),
    passwod: joi.string().min(5).max(20).required(),
})

const LoginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(5).max(20)
})

module.exports = {
    SigupSchema,
    LoginSchema
}