const { Router } = require('express')
const router = Router()
const passport = require('../config/passport')
const { verifyToken } = require('../config/jwt')
const { signup, login, logout } = require('../controllers/authControllers')

router.post('/signup', signup)
router.post('/login', passport.authenticate('local'), login)
router.get('/logout', logout)

module.exports = router