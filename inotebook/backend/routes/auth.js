const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');


//Create a user using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
    body('email', 'Enter a valid email').isEmail(),
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
    //console.log(req.body);
    //If there are errors, return Bad request and the errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    //Check whether the user with this email exists already
    try {
        //Create new user
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" });
        }
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })

        //.then(user=>res.json(user))
        //.catch(err=>{
        //console.log(err);
        //res.json({error:'Please enter unique value for email',message:err.message})
        //});
        res.json(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred")
    }

    //const user = User(req.body);
    //user.save()
    //res.send("Hello")
})

module.exports = router;