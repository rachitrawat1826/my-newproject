const express = require('express')
const router = express.Router()
const { Signup, Login, Logout } = require('../controllor/user')


router.get("/signup", Signup)
router.get("/login", Login)
router.get("/logout", Logout)

module.exports = router