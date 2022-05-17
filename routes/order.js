const express = require('express')
const router = express.Router()
const fetchuser = require("../middleware/fetchuser");
const Order = require('../models/Orders')
const { body, validationResult } = require('express-validator');


//ROUTE:1 Get All Notes using GET: api/notes/fetchallnotes
router.get('/fetchallorders', fetchuser, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id })
        res.json(orders)

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some Error Occured")
        return
    }
})

//ROUTE:2 Add notes using POST: api/notes/addnote
router.post('/addorder', fetchuser,
    [
        body('name', 'Enter valid name'),
        body('price', 'Enter valid price '),
        body('quantity', 'Enter valid quantity '),
        body('status', 'Enter valid status ')
    ],
    async (req, res) => {
        try {
            const { title, description, tag } = req.body;
            // If error occurs then return bad request
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const saveNote = await note.save()
            res.json(saveNote)
            // res.send(note)

        } catch (error) {
            console.error(error.message)
            res.status(500).send("Some Error Occured")
            return
        }

    })

//ROUTE:3 Update note using PUT: api/notes/updatenote
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body
    // Create a newnote object
    try {


        const newNote = {}
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };
        // Find thee note to be updated
        let note = await Note.findById(req.params.id)
        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json(note)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some Error Occured")
        return
    }
})

//ROUTE:4 Delete note using DELETE: api/notes/deletenote
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {


        // Find thee note to be deleted
        let note = await Note.findById(req.params.id)
        if (!note) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns the note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "success": "Deleted successfully", note: note })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some Error Occured")
        return
    }
})


module.exports = router