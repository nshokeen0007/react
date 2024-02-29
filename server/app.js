
const express=require('express')
const app=express();
const dotenv=require('dotenv')


dotenv.config({path:'./config.env'});
const cookieParser=require('cookie-parser')
const jwt = require('jsonwebtoken');

app.use(express.json());

app.use(cookieParser());
app.use("/upload",express.static('upload'))


// auth for router

app.use(require('./router/auth'))



// mongodb connectivity

require('./Db/config')
















































const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log("connect")
});
