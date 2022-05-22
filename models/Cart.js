const mongoose = require('mongoose')
const { Schema } = mongoose;
const Menu=require('./Menu')
const CartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    food_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'menu',
    },
    quantity: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('cart', CartSchema)