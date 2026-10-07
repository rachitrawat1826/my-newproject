const express = require('express')
const router = express.Router()
const { Signup, Login, Logout } = require('../controllor/user')
const { Validation } = require("../middleware")
const { SignupSchema, LoginSchema } = require("../validation")


router.post("/register", Validation(SignupSchema), Signup)
router.post("/login", Validation(LoginSchema), Login)
router.post("/logout", Logout)

module.exports = router