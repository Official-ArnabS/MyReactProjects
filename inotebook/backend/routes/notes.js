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

//Route 3:Updatre an existing note using POST "/api/auth/updatenote". Login required
router.put('/updatenote/:id', fetchuser,  async (req, res) => {
    const {title, description,tag}=req.body;
    //Create a newNote object
    const newNote={};
    if(title){
        newNote.title=title;
    }
    if(description){
        newNote.description=description;
    }
    if(tag){
        newNote.tag=tag;
    }

    //Find the note to be updated
    let note = await Note.findById(req.params.id);
    if(!note){
        return res.status(404).send("Not found");
    }
    if(note.user.toString()!=req.user.id){
        return res.status(401).send("Not allowed");
    }

    note = await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});

    res.json({note});

})

module.exports = router;