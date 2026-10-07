const Validation = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.user)
        if (error) {
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        next()
    }
}

module.exports = {
    Validation
}