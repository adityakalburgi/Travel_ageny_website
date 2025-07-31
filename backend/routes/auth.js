import express from 'express'
import { login, register } from '../Controllers/authController.js'
import { forgotPassword, resetPassword } from '../Controllers/passwordController.js'
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

router.post('/forgot-password', forgotPassword)
router.post('/reset-password', resetPassword)


export default router