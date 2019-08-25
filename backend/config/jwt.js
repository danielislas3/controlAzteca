require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.createToken = (user) => {
    return jwt.sign({
        userId: user._id,
        telephone: user.telephone,
        role: user.role
    }, process.env.SECRET, { expiresIn: '24h' }).split('.')
}

exports.verifyToken = (req, res, next) => {
    const { headload, signature } = req.cookies
    if (!headload || !signature) return res.status(401).json({ msg: 'Te falta algo para realizar esta acción' })
    jwt.verify(headload + signature, process.env.SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ msg: 'No tienes permiso para ingresar aquí' })
        User.findById(decoded.userId)
            .then(user => {
                req.user = user
                next()
            })
            .catch(err => {
                res.status(401).json({ err })
                next()
            })
    })
}