import express from 'express'
import { login, register } from '../Controllers/authController.js'
import { body } from 'express-validator';

import { forgotPassword, resetPassword } from '../Controllers/passwordController.js'

// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/register', [
  body('username').trim().notEmpty().withMessage('Username is required.'),
  body('email').isEmail().withMessage('Invalid email format.').normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
], register);

router.post('/login', [
  body('email').isEmail().withMessage('Invalid email format.').normalizeEmail(),
  body('password').notEmpty().withMessage('Password is required.'),
], login);

router.post('/forgot-password', forgotPassword)
router.post('/reset-password', resetPassword)



export default router