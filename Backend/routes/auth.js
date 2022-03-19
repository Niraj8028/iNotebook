const express = require('express');
const User=require('../models/users')
const { body, validationResult } = require('express-validator');
const router = express.Router();


router.post('/',[
    body('email',"Enter a Valid email").isEmail(),
    body('password',"Password must be greater than 5 letters").isLength({ min: 5 }),
    body('name',"Username must be valid").isLength({ min: 5 })

], (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email:req.body.email,
        password: req.body.password,
      }).then(user => res.json(user));
})

module.exports = router