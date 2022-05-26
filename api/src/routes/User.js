const router = require("express").Router();
const User = require("../models/Users")
const jwt = require("jsonwebtoken");
const argon2 = require("argon2")
const {auth, authVerification, authAdminVerification} = require("../middleware/auth");

//New password

router.patch("/change_password", auth, async (req, res) => {
 
    
    try{
        const { old_password, new_password, confirm_password} = req.body;
        const user = await User.findById(req.user.userId)

        if (!user) {
            return res.json({
                message:"user  does not exist",
                success: false
            });
        }
        const verifyPassword = await argon2.verify(user.password, old_password);
     
        if (!verifyPassword) {
            return res.json({
                message:"Password incorrect",
                success: false
            });
        };

        if (new_password !== confirm_password){
            return res.json({
                message:"Password does not match",
                success: false
            });
        }

        const hashedPassword = await argon2.hash( new_password)

        await User.findByIdAndUpdate(user._id, {password: hashedPassword})



     res.json({
                     message:"Password changed successfully",
                     success: true,
                   
                 });
     
    } catch (err) {
        res.json({err:err.message})
    };
});

//UPDATE
 router.put("/:id", authVerification, async (req, res) => {

    try{
        const userCheck = await User.findById(req.params.id);

          //check password password user is entering matches password in DB
          const passwordcheck = await argon2.verify(userCheck.password, req.body.password);
          //await bycrypt.hash(req.body.password, 12)
          
          if (!passwordcheck){
              return res.json({
                  message:"Incorrect login details",
                  success: false,
                  }); 
          }
        const updatedUser = await User.findByIdAndUpdate(
                        req.user.userId, {$set: req.body},
                        {
                            new: true
                        }
                    ).select({password: 0});

     res.json({
                     message:"Profile Updated",
                     success: true,
                     user: updatedUser
                 });
     
    } catch (err) {
        res.json({err:err.message})
    };
});

//DELETE
router.delete("/:id", authVerification, async (req, res) => {

    User.findByIdAndRemove(req.params.id, function(err){
    if(err){
        res.json({err:err.message});
    } else {
         res.json({
   
            message:"Profile Deleted",
            success: true 
    
});
    }
 });
   
});


//GET USER
router.get("/find/:id", authAdminVerification, async (req, res) => {
 
    
    try{
        const user = await User.findById(req.params.id);
     

        



     res.json({
                     message:"Data found",
                     success: true,
                     user
                     
                 });
     
    } catch (err) {
        res.json({err:err.message})
    };
});


//GET ALL USER
router.get("/",  async (req, res) => {
 
    const query = req.query.new;
    
    try{
        const users = query 
        ? await User.find().sort({_id: -1}).limit(5)
        : await User.find();
     

        



     res.json({
                     message:"Data found",
                     success: true,
                     users
                 });
     
    } catch (err) {
        res.json({err:err.message})
    };
});

//GET USER STATS

router.get("/stats", async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() -1));
    
    try{
        const date = await User.aggregate([
            { $match: { createdAt: {$gte: lastYear} } },
            {
                $project: {
                    month: { $month: "$createdAt"},
                },  
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1}
                }
            }
        ])
        res.json({
            message:"Data found",
            success: true,
            date
        });
    } catch(err) {
        res.json({err:err.message})
    };
}) 








module.exports = router;