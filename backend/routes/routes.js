const { Router } = require('express');
const router = Router();
const Login = require('../controllers/login')
const Register = require('../controllers/register')


router.post('/login', () => Login)
router.post('/register', () => Register)
module.exports = router;