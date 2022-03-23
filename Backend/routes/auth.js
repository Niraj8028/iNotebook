const express = require('express');
const User = require('../models/users')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const router = express.Router();
const fetchUser=require('../middleware/fetchUser')
var jwt = require('jsonwebtoken');


const token = "shhhhhh";

router.post('/', [
  body('email', "Enter a Valid email").isEmail(),
  body('password', "Password must be greater than 5 letters").isLength({ min: 5 }),
  body('name', "Username must be valid").isLength({ min: 5 })

], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password, salt);
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: secPass,
  }).then(user => res.json(user));

  const data = {
    user: {
      id: User.id
    }
  }
  const authToken = jwt.sign(data, token);
  res.json({ authToken });
})

router.post('/login', [
  body('email', "Enter a Valid email").isEmail(),
  body('password', "Password must be greater than 5 letters").exists(),
], async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, token);
    res.json({ authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

router.post('/getuser',[

],async (req,fetchuser,res)=>{
  try {
    let userid="";
    const user=await User.findById(userid).select("-password");
    
  } catch (error) {
    console.log(error.message);
    res.status(500).send("internal error occured")
  }
})
module.exports = router