const User = require("../models/user")
const passport = require("passport");

const Signup = async(req, res) => {
    try {
        const user = {
            fullName: req.body.fullName,
            email: req.body.email,

        }
        const password = req.body.password
        const registered = User.register(user, password)
        res.status(201).json({
            message: "register sucessfully",
            registered
        })
    } catch (error) {
        console.log(error.message)
    }
}
const Login = [
    passport.authenticate("local"),
    (req, res) => {
        res.json({
            message: "Login successful",
            user: req.user
        });
    }
];
const Logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }

        res.json({
            message: "logout successful"
        });
    });
};
module.exports = {
    Signup,
    Login,
    Logout
}