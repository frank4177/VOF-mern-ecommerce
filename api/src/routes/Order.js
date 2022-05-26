const router = require("express").Router();
const Order = require("../models/Order")
const jwt = require("jsonwebtoken");
const argon2 = require("argon2")
const {auth, authVerification, authAdminVerification} = require("../middleware/auth");


//CREATE

router.post("/", auth, async (req, res) => {

    

   
        
        
    try{
       

        
       
 
         const newOrder = new Order (req.body);
     
 
       const savedOrder = await newOrder.save();

     res.json({
                     message:"New Order",
                     success: true,
                     user: savedOrder
                 });
     
    } catch (err) {
        res.json({err:err.message})
    };
   
})



//UPDATE
 router.put("/:id", authAdminVerification, async (req, res) => {

    try{
        const updatedOrder = await Order.findByIdAndUpdate(
                        req.params.id, {$set: req.body},
                        {
                            new: true
                        }
                    ).select({password: 0});

     res.json({
                     message:"Order Updated",
                     success: true,
                     user: updatedOrder
                 });
     
    } catch (err) {
        res.json({err:err.message})
    };
});

//DElETE
router.delete("/:id", authAdminVerification, async (req, res) => {

    Order.findByIdAndRemove(req.params.id, function(err){
    if(err){
        res.json({err:err.message});
    } else {
         res.json({
   
            message:"Order Deleted",
            success: true 
    
});
    }
 });
   
});


//GET USER ORDERS
router.get("/find/:userid", authAdminVerification, async (req, res) => {
 
    
    try{
        const Orders = await Order.find({userId: req.params.userId});
     

        



     res.json({
                     message:"Data found",
                     success: true,
                     Orders
                     
                 });
     
    } catch (err) {
        res.json({err:err.message})
    };
});


//GET ALL ORDERS
router.get("/",  async (req, res) => {
  try {
      const Orders = await Order.find();
    
      res.json({
        message:"Data found",
        success: true,
        Orders
        
    });
      
  } catch (err) {
    res.json({err:err.message})
  }
    
});

// GET MONTHLY INCOME
router.get("/income", async (req, res) => {
  const productId = req.query.pid;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && {
            products: { $elemMatch: { productId } },
          }),
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;