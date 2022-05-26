const router = require("express").Router();
const Product = require("../models/Products")
const jwt = require("jsonwebtoken");
const argon2 = require("argon2")
const {auth, authVerification, authAdminVerification} = require("../middleware/auth");
const cloudinary = require("../utilities/cloudinary");
const upload = require("../utilities/multer");
const parser = require("../services/fileUploads");


//CREATE

router.post("/",    parser.single("image"), async (req, res) => {
    const newProduct = new Product(req.body);
  
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//     // const newProduct = new Product(req.body);

   
        
        
//     try{
       

//         //const result = await cloudinary.uploader.upload(req.file.path);
        
//         const hasImage = req.file ? req.file.path : null;
//         // const = result.secure_url;
       
 
//          const newProduct = new Product ({
//                         title:req.body.title,
//                         description:req.body.description,
//                         image:hasImage,
//                         sku:req.body.sku,
//                         price:req.body.price,
//                         color:req.body.color,
//                         size:req.body.size,
//                         category:req.body.category,
//                         inventory:req.body.inventory,
//                         active:req.body.active
                        
                        
//                     })
     
 
//        const savedProduct = await newProduct.save();

//      res.json({
//                      message:"Product created successfully",
//                      success: true,
//                      user: savedProduct
//                  });
     
//     } catch (err) {
//         res.json({err:err.message})
//     };
   
// })



//UPDATE
 router.put("/:id",  authAdminVerification,  async (req, res) => {

    try{
        const updatedProduct = await Product.findByIdAndUpdate(
                        req.params.id, {$set: req.body},
                        {
                            new: true
                        }
                    ).select({password: 0});

     res.json({
                     message:"Product Updated",
                     success: true,
                     user: updatedProduct
                 });
     
    } catch (err) {
        res.json({err:err.message})
    };
});



//ADD CATEGORY
 router.patch("/Add_category/:id",  authAdminVerification, async (req, res) => {

    
    try{
        
 
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, {$push: req.body},
            {
                new: true
            }
        ).select({password: 0});
     
 
     res.json({
                     message:"Category added",
                     success: true,
                     user: updatedProduct
                 });
     
    } catch (err) {
        res.json({err:err.message})
    };
});




//DELETE
router.delete("/:id", async (req, res) => {

    Product.findByIdAndRemove(req.params.id, function(err){
    if(err){
        res.json({err:err.message});
    } else {
         res.json({
   
            message:"Product Deleted",
            success: true 
    
});
    }
 });
   
});


//GET PRODUCT
router.get("/find/:id", async (req, res) => {
 
    
    try{
        const product = await Product.findById(req.params.id);
     

        



     res.json({
                     message:"Data found",
                     success: true,
                     product
                     
                 });
     
    } catch (err) {
        res.json({err:err.message})
    };
});


//GET ALL PRODUCTS
router.get("/",  async (req, res) => {

    const keyword = req.query.keyword ? {
        title:{
            $regex:req.query.keyword,
            $options: "i",
        },
    }

    : {};
    
    const qNew = req.query.new;
    const qCategory = req.query.category;
    
    try{
        let products;

        if(qNew){
            products = await Product.find().sort({ createdAt: -1 }).limit(5)
        } else if (qCategory) {
            products = await Product.find({
                category: {
                    $in : [qCategory],
                },
            });
        } else {
            products = await Product.find({...keyword})
        }
       

        



     res.json({
                     message:"Data found",
                     success: true,
                     products
                 });
     
    } catch (err) {
        res.json({err:err.message})
    };
});









module.exports = router;