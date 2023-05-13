const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")

//description Register a user
// route POST /api/users
// access Public
const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body
    if (!username || !email || !password){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const userAvailable = await User.findOne({email})
    if (userAvailable){
        res.status(400)
        throw new Error("User already registered")
    }
    
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("Hashed password:", hashedPassword)
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })
    console.log(`User created ${user}`)
    if(user){
        res.status(201).json({_id: user.id, email: user.email})
    }else{
        res.status(400)
        throw new Error("User data is not valid")
    }
  res.json({ message: "Register the user" });
});

//description Login a user
// route POST /api/users
// access Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login the user" });
});

//description Get current information of a user
// route GET /api/users
// access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};