const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        
    },
    image: {
        type: String,
        
    }, 
    sku: {
    type:String,
    unique:true
},
    price:{
    type:String,
    required: true
    
},
    color:{
    type:Array
},
 
    brand:{
    type:Array
},

    size:{
    type:Array
},
    category:{
        type:Array
    },
    inventory:{
        type: Number
    },
    discount:{
        type: Number
    },
    active:{
        type:Boolean, 
        default:true
    }
 
},
{ timestamps: true});


    // mainCategory:String,
    // subCategory:String
    


module.exports = mongoose.model("Product", ProductSchema)