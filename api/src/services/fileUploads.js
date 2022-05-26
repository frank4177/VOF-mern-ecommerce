const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");
const multer = require("multer");
const dotenv = require("dotenv");







dotenv.config();

const version2 = cloudinary;

version2.config({
    cloud_name: process.env.Cloud_name,
    api_key:  process.env.CLoudinary_API_Key,
    api_secret:  process.env.CLoudinary_API_Secret
    
});

const storage = new CloudinaryStorage({
    cloudinary: version2
});

const parser = multer({storage})

module.exports = parser;