const express = require('express')
const router = express.Router()
const { home } = require('../controllor/user')


router.get("/", home)

module.exports = router