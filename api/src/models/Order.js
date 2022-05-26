const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
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
        type:String
    },
    amount: {
        type: Number,
        required: true
},
    status: {
        type: String,
        default:"pending"}
},
{ timestamps: true});

module.exports = mongoose.model("Order", OrderSchema)