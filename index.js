const express = require("express");
const session = require("express-session");
const passport = require("passport");

const connectionDB = require("./configuration/mongosh");
const UserRouter = require("./routes/user");
const User = require("./models/user");

const app = express();
const port = 3000;

connectionDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "my-secrete-key",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/api/user", UserRouter);

app.listen(port, () => {
    console.log(`app listening on port ${port}!`);
});