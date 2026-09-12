const Signup = async(req, res) => {
    console.log("its home route")
    res.json({
        message: "you are in signup route"
    })
}
const Login = async(req, res) => {
    console.log("its login route")
    res.json({
        message: "you are in home route"
    })
}
const Logout = async(req, res) => {
    console.log("its logout route")
    res.json({
        message: "you are in home route"
    })
}
module.exports = {
    Signup,
    Login,
    Logout
}