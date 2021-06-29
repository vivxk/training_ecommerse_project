const mongoose = require('mongoose')


const historySchema = new mongoose.Schema({
    productId: String,
    productPrice: Number,
    ProductTitle: String,
    quantity: Number,
    userId: String

}, {
    timestamps: true
})

module.exports = mongoose.model("History", historySchema)