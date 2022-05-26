const router = require("express").Router();
const Cart = require("../models/cart")
const jwt = require("jsonwebtoken");
const argon2 = require("argon2")
const {auth, authVerification, authAdminVerification} = require("../middleware/auth");


//CREATE

router.post("/", auth, async (req, res) => {

    
   
        
        
    try{
       

        
       
 
         const newCart = new Cart (req.body);
     
 
       const savedCart = await newCart.save();

     res.json({
                     message:"Added to cart",
                     success: true,
                     user: savedCart
                 });
     
    } catch (err) {
        res.json({err:err.message})
    };
   
})



//UPDATE
 router.put("/:id", authVerification, async (req, res) => {

    try{
        const updatedCart = await Cart.findByIdAndUpdate(
                        req.params.id, {$set: req.body},
                        {
                            new: true
                        }
                    ).select({password: 0});

     res.json({
                     message:"Cart Updated",
                     success: true,
                     user: updatedCart
                 });
     
    } catch (err) {
        res.json({err:err.message})
    };
});

//DElETE
router.delete("/:id", authVerification, async (req, res) => {

    Cart.findByIdAndRemove(req.params.id, function(err){
    if(err){
        res.json({err:err.message});
    } else {
         res.json({
   
            message:"Cart Deleted",
            success: true 
    
});
    }
 });
   
});


//GET USER CART
router.get("/find/:userid", authVerification, async (req, res) => {
 
    
    try{
        const cart = await Cart.findOne({userId: req.params.userId});
     

        



     res.json({
                     message:"Data found",
                     success: true,
                     cart
                     
                 });
     
    } catch (err) {
        res.json({err:err.message})
    };
});


//GET ALL PRODUCTS
router.get("/", authAdminVerification, async (req, res) => {
  try {
      const carts = await Cart.find();
    
      res.json({
        message:"Data found",
        success: true,
        carts
        
    });
      
  } catch (err) {
    res.json({err:err.message})
  }
    
});








module.exports = router;