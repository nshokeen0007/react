const UserData=require("../model/schema")
const jwt = require('jsonwebtoken')



const Authenticate=async (req,res,next)=>{
try{

    const token=req.cookies.jwtoken;
    // console.log(token);

    const verifyToken= jwt.verify(token,process.env.SECRET_KEY);
    const rootUser= await UserData.findOne({_id:verifyToken._id,"tokens.token":token})

    if(!rootUser){
        throw new Error("user not found")
    }

    req.token=token;
    req.rootUser=rootUser;
    req.userId=rootUser.id;
    next();
    
}catch(err){
    res.status(401).send("no token found")
console.log(err);
}

}





















module.exports=Authenticate;



