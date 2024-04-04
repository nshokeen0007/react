const mongoose=require('mongoose')
// const Db=process.env.DATABASE;
const Db='mongodb+srv://nshokeen0007:lalasingh@cluster0.t4a9owf.mongodb.net/Hospital'
        // 'mongodb+srv://lazerxd002:fakedatabase@cluster0.1xzl4xe.mongodb.net/urbanzoro'
mongoose.connect(Db,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
)
.then(()=>console.log('connection successful'))
.catch((err)=>console.log(err));







module.exports=mongoose;