const { Router } = require('express')
const router = Router()
const passport = require('../config/passport')
const { verifyToken } = require('../config/jwt')
const { oneUser } = require('../controllers/userController')

router.get('/perfil/:id', oneUser)

module.exports = router