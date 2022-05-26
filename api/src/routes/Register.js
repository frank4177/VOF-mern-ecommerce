const router = require("express").Router();
const User = require("../models/Users")
const dotenv = require("dotenv")
const argon2 = require("argon2")
const jwt = require("jsonwebtoken");
const {auth, authVerification, authAdminVerification} = require("../middleware/auth");



//REGISTER

router.post("/register", async (req, res) => {

  
    try{

        //check if emailalready exist in DB
        const userCheck = await User.findOne({ email:req.body.email});

        console.log("=====USERCHECK====");
        console.log(userCheck);

        //If user exist
        if (userCheck) {
           return res.json({
                message:"user with email already exist",
                success: false,
               
            }); 
        };
        // Hash Password
        const hashedPassword = await argon2.hash(req.body.password)
        
        const newUser = new User ({
            userName:req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email:req.body.email,
            age:req.body.age,
            phoneNumber: req.body.phoneNumber,
            password: hashedPassword,
            isAdmin: req.body.isAdmin
        })
        
        console.log(newUser);

        const savedUser = await newUser.save()
        
        // const {password, ...others} = user._doc
         res.json({
            message:"Account created succesfully",
            success: true,
            user: savedUser
        });

    } catch(err){
        res.json({err: err.message})
    }

});

  //LOGIN

  router.post("/login", async (req, res) =>{
        try{

            const userCheck = await User.findOne({email:req.body.email});


    //check if email already exist in DB
         
            console.log("=====USERCHECK====");
            console.log(userCheck);

            //If user doesnt exist
            if (!userCheck) {
               return res.json({
                message:"User does not exist",
                success: false,
                }); 
            } 

            //check password password user is entering matches password in DB
            const passwordcheck = await argon2.verify(userCheck.password, req.body.password);
            //await bycrypt.hash(req.body.password, 12)
            
            if (!passwordcheck){
                return res.json({
                    message:"Incorrect login details",
                    success: false,
                    }); 
            }
            const {password, ...others} = userCheck._doc;

            // //Sign Token
            const token = jwt.sign({ userId: userCheck._id,
            isAdmin: userCheck.isAdmin}, process.env.JWT_SECRET, {expiresIn:"90"});

           
            res.json({
             message:"login Successful",
             success: true,
             tokenkey: token,
             ...others
            
            });

         
            

        } catch(err){
            res.json({err: err.message})
        }
    });


module.exports = router;