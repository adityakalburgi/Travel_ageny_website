import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator';

// user register
export const register = async (req, res) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
   }

   try {
      const { username, email, password, photo } = req.body;

      // Validate required fields
      if (!username || !email || !password) {
         return res.status(400).json({ success: false, message: "Username, email and password are required." });
      }

      // Check if user with email already exists
      const existingEmailUser = await User.findOne({ email });
      if (existingEmailUser) {
         return res.status(409).json({ success: false, message: "User with this email already exists." });
      }

      // Check if user with username already exists
      const existingUsernameUser = await User.findOne({ username });
      if (existingUsernameUser) {
         return res.status(409).json({ success: false, message: "Username is already taken." });
      }

      // Hashing password
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      const newUser = new User({
         username,
         email,
         password: hash,
         photo
      });

      await newUser.save();

      res.status(201).json({ success: true, message: "Successfully created!" });
   } catch (error) {
      console.error("Register error:", error.stack || error);
      res.status(500).json({ success: false, message: "Failed to create! Try again." });
   }
}

// user login
export const login = async (req, res) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
       return res.status(400).json({ success: false, errors: errors.array() });
   }

   try {
      const email = req.body.email;
      const user = await User.findOne({ email });

      // if user doesn't exist
      if (!user) {
         return res.status(404).json({ success: false, message: 'User not found!' });
      }

      // if user exists then check the password or compare the password
      const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password);

      // if password incorrect 
      if (!checkCorrectPassword) {
         return res.status(401).json({ success: false, message: "Incorrect email or password!" });
      }

      const { password, role, ...rest } = user._doc;

      // create jwt token
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn:"15d" });

      // set token in the browser cookies and send the response to the client
      res.cookie('accessToken', token, {
         httpOnly: true,
         expires: token.expiresIn
      }).status(200).json({token, data:{...rest}, role});
   } catch (error) {
      res.status(500).json({ success: false, message: "Failed to login" });
   }
}
