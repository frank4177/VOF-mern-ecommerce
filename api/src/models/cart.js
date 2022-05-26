const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
    userId: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    quantity: {
        type: Number,
        default: 1
        
    },
    productId:{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
},
{ timestamps: true});

module.exports = mongoose.model("cartItem", cartItemSchema)