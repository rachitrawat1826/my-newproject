const express = require('express')
const connectionDB = require("./configuration/mongosh")
const UserRouter = require('./routes/user')
const app = express()
const port = 3000


connectionDB()
app.use("/api/user/login", UserRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`app listening on port ${port}!`))