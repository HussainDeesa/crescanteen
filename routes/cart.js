const express = require('express')
const router = express.Router()
const fetchuser = require("../middleware/fetchuser");
const Cart = require('../models/Cart')
const Menu = require('../models/Menu')
const { body, validationResult } = require('express-validator');


//ROUTE:1 Get All Notes using GET: api/notes/fetchallnotes
router.get('/fetchallcartitems', fetchuser, async (req, res) => {
    try {
        // let Carts;
        let Foods=[]
        let Food = [{
            name: '',
            quantity: '',
        }];
        // const getCart = async () => {
        //     Carts = await Cart.find({ user: req.user.id })
        //     cartlength=Carts.length;
        // }
        // const getFood = async (Carts) => {
        //     for (let i = 0; i < Carts.length; i++) {
        //         Foods = await Menu.find({ _id: Carts[i].food_id })
        //         Food.name= await Foods[0].name
        //         Food.quantity=await Carts[i].quantity
        //         Food.price=await Foods[0].price
        //         console.log(Food);
        //     }
        // }
        // getCart().then(async ()=>{
        //     await getFood(Carts)

        // })
        const Carts = await Cart.find({ user: req.user.id })
        for (let i = 0; i < Carts.length; i++) {
            Foods[i] = await Menu.find({ _id: Carts[i].food_id })
            Food[0].quantity = await Cart.find({ user: req.user.id }, { "quantity": 1 })
        }
        const cart_count = await Cart.find({ user: req.user.id }).countDocuments()
        res.json({ Carts, cart_count, Food,Foods })

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some Error Occured")
        return
    }
})

//ROUTE:2 Add notes using POST: api/notes/addnote
router.post('/addtocart', fetchuser,
    [
        body('quantity', 'Enter valid quantity '),
    ],
    async (req, res) => {
        try {
            const { food_id, quantity } = req.body;
            // If error occurs then return bad request
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
            const cart = new Cart({
                quantity: req.body.quantity,
                food_id: req.body.food_id,
                user: req.user.id
            })
            const saveCart = await cart.save()
            res.json(saveCart)
            // res.send(note)

        } catch (error) {
            console.error(error)
            res.status(500).send("Some Error Occured")
            return
        }

    })
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

router.delete('/deletecart/:id', fetchuser, async (req, res) => {
    try {


        // Find thee note to be deleted
        let cart = await Cart.findById(req.params.id)
        if (!cart) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns the note
        if (cart.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        cart = await Cart.findByIdAndDelete(req.params.id)
        res.json({ "success": "Deleted successfully", cart: cart })
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