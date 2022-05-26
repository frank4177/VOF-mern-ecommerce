const mongoose = require("mongoose");

const userPaymentSchema = new mongoose.Schema({

    userId:{

    },
    paymentType:{
        type:String
    },

},
{ timestamps: true});

module.exports = mongoose.model("userPayment", userPaymentSchema)
