const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
        
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
    type: String,
    required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: false,
        
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
        
    },
    password:{
        type:String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: 'false'
    },
   img:{
       type: String
   },
},
{ timestamps: true});

module.exports = mongoose.model("User", UserSchema)