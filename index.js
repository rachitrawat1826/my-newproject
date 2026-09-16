const express = require('express')
const passport = require('passport')
const connectionDB = require("./configuration/mongosh")
const UserRouter = require('./routes/user')
const app = express()
const port = 3000


connectionDB()

app.use(passport.initialize())
app.use(passport.session())

app.use("/api/user/", UserRouter)

app.listen(port, () => console.log(`app listening on port ${port}!`))