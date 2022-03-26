const express = require('express');
const fetchuser = require('../middleware/fetchUser');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const notes = require('../models/notes')


router.get('/getallnotes', fetchuser, async (req, res) => {
    try {
        const Notes =await notes.find({ user: req.user.id });
        res.json(Notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})

router.post('/addnotes', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
        try {
            const { title, description, tag } = req.body;

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const note = new notes({
                title, description, tag, user: req.user.id
            })
            const savednote = await note.save();
            res.json(savednote);

        }
        catch (error) {

            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
)

router.put('/updatenote/:id',fetchuser,async (req,res)=>{
    const {title,description,tag}=req.body;
    const newNote={};
    if(title){newNote.title=title}
    if(description){newNote.description=description}
    if(tag){newNote.tag=tag}

    let note=await notes.findByIdAndUpdate(req.params.id);
    if(!note){return res.status(404).send("Not Found")}

    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not Allowed");
    }
    note= await notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
    res.json({note});

})
router.delete('/deletenote/:id',fetchuser,async(req,res)=>{
    const {title,description,tag }=req.body;
    let note=await notes.findByIdAndDelete(req.params.id);

    if(!note){
        return res.status(404).send("not found");
    }
    if(note.user.toString() !==req.user.id){
        return res.status(401).send("not allowed");
    }
    note=await notes.findByIdAndDelete(req.params.id);
    res.json({"Success":"The note has been Deleted"});
})
module.exports = router