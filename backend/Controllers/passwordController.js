import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import nodemailer from 'nodemailer'
import { sendResetEmail } from '../utils/sendEmail.js'

const CLIENT_URL = 'http://localhost:3000' // Update if using frontend


// Forgot Password
export const forgotPassword = async (req, res) => {
  const { email } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({ message: 'User not found' })

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_RESET_SECRET,
      { expiresIn: '15m' }
    )

    const resetLink = `${process.env.FRONTEND_URL}/reset-password/${token}`

    await sendResetEmail(user.email, resetLink)

    res.status(200).json({ message: 'Password reset link sent to your email' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Something went wrong. Try again.' })
  }
}

// Reset Password
export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body

  try {
    const decoded = jwt.verify(token, process.env.JWT_RESET_SECRET)

    const user = await User.findById(decoded.userId)
    if (!user) return res.status(404).json({ message: 'User not found' })

    const hashedPassword = await bcrypt.hash(newPassword, 10)
    user.password = hashedPassword
    await user.save()

    res.status(200).json({ message: 'Password reset successful' })
  } catch (err) {
    console.error(err)
    if (err.name === 'TokenExpiredError') {
      return res.status(400).json({ message: 'Reset link expired. Please request again.' })
    }
    res.status(500).json({ message: 'Invalid or expired token.' })
  }
}