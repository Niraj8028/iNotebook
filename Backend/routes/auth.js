const express = require('express');
const User=require('../models/users')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const router = express.Router();


router.post('/',[
    body('email',"Enter a Valid email").isEmail(),
    body('password',"Password must be greater than 5 letters").isLength({ min: 5 }),
    body('name',"Username must be valid").isLength({ min: 5 })

],async (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(req.body.password, salt);
    User.create({
        name: req.body.name,
        email:req.body.email,
        password: secPass,
      }).then(user => res.json(user));
})

module.exports = router