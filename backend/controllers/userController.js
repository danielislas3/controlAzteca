const User = require('../models/User')

exports.oneUser = (req, res, next) => {
    const { id } = req.params
    User.findById(id)
        .then(user => res.status(200).json({ user }))
        .catch(err => res.status(500).json({ err }))
}