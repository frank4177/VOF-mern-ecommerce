const mongoose = require("mongoose");

const userAddressSchema = new mongoose.Schema({
    userId: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
    type: String
    },
    city: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true,
        
    },
    postalCode: {
        type: Number,
        required: true,
        unique: true
        
    }
});

module.exports = mongoose.model("userAddress", userAddressSchema)