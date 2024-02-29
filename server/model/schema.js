let mongoose=require('mongoose')
let bcrypt=require('bcryptjs')
// require('dotenv').config({path:'./config.env'});
// const secretKey = process.env.SECRET_KEY;



const jwt = require('jsonwebtoken');




const Userschema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true
    },
   
    email:{
        type:String
    },
    Profilephoto:{
        type:String
        
    },
    messages:[
      {
        username:{
          type:String,
          required:true
        },
        email:{
          type:String,
          required:true
        },
        message:{
          type:String,
          required:true
        }

      }

    ],

    tokens: [{
        token: {
          type: String,
          required: true,
        },
      }],
  
})



// Userschema.pre('save',function(next){
//     if(!this.isModified("password")){
//         return next();
//     }
//     this.password = bcrypt.hashSync(this.password,10);
//     next();
// })
// Userschema.methods.comparePassword=function(plaintext,callback){
//     return callback(null,bcrypt.compareSync(plaintext,this.password))
// }



Userschema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12);
      
    }
    next();
})






// Userschema.methods.generateAuthtoken=async ()=>
// {
//     try{
// const token = jwt.sign({ _id: this._id },
//     process.env.SECRET_KEY);
        
//         this.tokens=this.tokens.concat({token:token});
//         await this.save();
//         return token;
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }



Userschema.methods.generateAuthtoken = async function () {
    try {
    
      const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
      this.tokens = this.tokens.concat({ token: token });
      await this.save();
      return token;
    } catch (err) {
      console.log(err);
    }
  };
  Userschema.methods.addMessage=async function(username,email,message)
  {
      try{
  
          this.messages=this.messages.concat({username,email,message });
  
          await this.save();
          return this.message;
      }catch(error){
          console.log(error)
      }
  
  }

  










const userModel=mongoose.model('SingupData',Userschema)


module.exports=userModel