const home = async(req, res) => {
    console.log("its home route")
    res.json({
        message: "you are in home route"
    })
}
module.exports = {
    home
}