const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")
const User = require("../models/Users")

dotenv.config();


// n

// // auth 
// const auth = (req, res, next) => {
//     const authHeader = req.headers.token;
//     if (authHeader) {
//         const token = authHeader.split(" ")[1];
//         jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//             if (err) res.json({message:"Token is not valid!"});
//             else { 
//     req.user = user; 
//    next();
// }
//         });
//     } else {
//         return res.json({message:"You are not authenticated!"})
//     }
// }

const auth = async (req, res, next) => {
    //check if there is an authorization field in request headers
    try {
        const headers = req.headers.authorization
    
        if (!headers){
            throw new Error();
        }
    
        const headerValue = headers.split(" ");
        const token = headerValue[1];
        
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    
        req.user = decodedToken;
    
        console.log("Ran this auth")
        
    
        next();
    } catch (err) {
    
        return res.json({message: "not Authorised", success: false})
    }
    }

//  if (err) { 
//     res.status(403).json('Token is not valid');
// } else { 
//    req.user = user; 
//    next();
// }

//admin@me.com

const authVerification = (req, res, next) => {
    auth(req, res, ()=> {
        if(req.user.id === req.params.id || req.user.isAdmin){
           next();
        } else{
            res.json({message: "You are not Authorised"})
        }
    })
}

const authAdminVerification = async (req, res, next) => {
    auth(req, res, ()=> {


        if(req.user.isAdmin) {
            
            console.log("running")
            next();
        
        
        
        
        
        } else{
        console.log(req.user.userId)
        res.json({message: "not Admin"})
        }
        
  
    })
}

module.exports = {auth, authVerification, authAdminVerification };








// try{
//     const admin = await User.findById(req.user.userId);
//     if (admin.isAdmin) {
//         next();

//     }
// } catch(err){
//   res.json({err:err.message})
// }