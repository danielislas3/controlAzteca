const User = require('../models/User')
const Transaction = require('../models/Transaction')

exports.oneUser = (req, res, next) => {
    const { id } = req.params
    User.findById(id)
        .then(user => res.status(200).json({ user }))
        .catch(err => res.status(500).json({ err }))
}

exports.gasto = (req, res, next) => {
    const { id } = req.params
    Transaction.create({...req.body, userId: id })
        .then(transaction => res.status(201).json({ transaction, msg:'Todo salió bien' }))
        .catch(err => res.status(500).json({ err }))
}

exports.transDetIn = (req, res, next) => {
    const { id } = req.params
    Transaction.find({ userId: id, tipo: "Ingreso"  })
        .then(transaction => res.status(200).json({ transaction }))
        .catch(err => res.status(500).json({ err }))
}
exports.transDetGa = (req, res, next) => {
    const { id } = req.params
    Transaction.find({ userId: id, tipo: "Gasto"  })
        .then(transaction => res.status(200).json({ transaction }))
        .catch(err => res.status(500).json({ err }))
}