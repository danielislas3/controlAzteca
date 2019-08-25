const { Router } = require('express')
const router = Router()
const passport = require('../config/passport')
const { verifyToken } = require('../config/jwt')
const { oneUser, gasto, transDetIn, transDetGa } = require('../controllers/userControllers')

router.get('/perfil/:id', oneUser)
router.post('/:id/transaction',  gasto)
router.get('/:id/transactions', transDetIn)
router.get('/:id/transactionsg', transDetGa)

module.exports = router