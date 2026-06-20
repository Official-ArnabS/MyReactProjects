const express = require('express');
const router = express.Router()
var fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const Note = require('../models/Note');

//Route 1:Get all the notes using GET "/api/auth/getuser". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const note = await Note.find({ user: req.user.id });
        res.json(note);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }

})


//Route 2:Add a new note using POST "/api/auth/addnote". Login required
router.post('/addnote', fetchuser, [body('title', 'Enter a valid title').isLength({ min: 3 }),
body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    //console.log(req.body);
    const { title, description, tag } = req.body;
    //If there are errors, return Bad request and the errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savednote = await note.save();

        res.json(savednote);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
})

module.exports = router;