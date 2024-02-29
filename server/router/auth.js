const express=require('express');

const router=express.Router();

const bcrypt=require('bcryptjs')

const multer=require('multer')


// schemas
const UserData=require('../model/schema')

// department schema

const DepartData=require('../model/department_table_schema')

// Doctor schema
const Docmodel=require('../model/doctor_schema')

// patient Schema
const PatientData=require('../model/patient_schema')


// bed schema

const BedSchema=require('../model/bed_schema')

// appointment schema

const AppointData=require('../model/appontment_schema')

// service schema

const ServiceData=require('../model/service_schema')

// authenticate 

const Authanticate=require('../Middlware/authanticate');
const { errorMonitor } = require('events');



router.get('/',(req,res)=>{
    res.send("HELLO WORD")

})
// router.get('/signup',(req,res)=>{
//     res.send('nikki')
// })






router.get('/Contact',Authanticate,(req,res)=>{
  // console.log("hello use to about")
  res.send(req.rootUser)
})


router.get('/getdata',Authanticate,(req,res)=>{
  // console.log("hello use of contact")
  res.send(req.rootUser)
})



router.post('/Contact', Authanticate, async (req, res) => {
  try {
    const { username, email, message } = req.body;
    if (!username || !email || !message) {
      // console.log("error in contact form");
      return res.status(400).json({ error: "Form fields not filled" });
    }
    const Contact = await UserData.findOne({ _id: req.userId });
    // console.log(Contact)
    if (Contact) {
      const newMessage = await Contact.addMessage(username, email, message);
      console.log(newMessage)


      await Contact.save();
      res.status(201).json({ message: "Message sent" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});















router.get('/Userpanel',Authanticate,(req,res)=>{
  // console.log("this is Userpanel")
  res.send(req.rootUser)
 
})
// router.get('/appointment',Authanticate,(req,res)=>{
//   // console.log("this is Userpanel")
//   res.send(req.rootUser)
 
// })











// signup post data
const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'../server/upload')
  },
  filename:(req,file,cb)=>{
    cb(null,file.originalname)
  }
})

const fileFilter=(req,file,cb)=>{
  const allowedFileTypes=['image/jpg','image/png','image/jpeg']
  if(allowedFileTypes.includes(file.mimetype)){
    cb(null,true)
  }else{
    cb(null,false)
  }
}
let upload=multer({storage,fileFilter})



router.post('/signup',upload.single('Profilephoto'),async(req,res)=>{
  const {username,password,role,email}=req.body;
  const Profilephoto=req.file.filename;

  // if(!username || !password || !role ||!email )
  // {
  //   return res.status(422).json({error:"plz fill all filled"});
  // }

  try{
    const useExist=await UserData.findOne({email:email})
    if(useExist){
       return res.status(422).json({error:'email already exist'})
    }
    // else if(password !=cpassword){
    //   return res.status(422).json(error:'password not match')
    // }
  
 

    const user= new UserData({username,password,role,email,Profilephoto});

    const saveUser=await user.save();
    if(saveUser){
        
  return res.status(201).json({message:"user registered sucessful"})
    }
    // else{
    //     res.status(202).json({message:"user registered unsucessful"})

    // }
}catch(err){
    console.log(err);
}

})



// router.post('/signup',upload.single('Profilephoto'),(req,res)=>{
//   const user=new UserData({
//     username:req.body.username,
//     password:req.body.password,
//     role:req.body.role,
//     email:req.body.email,
//     Profilephoto:req.file.filename
//   })
//   user.save()
//   .then((data)=>{
//     console.log("data send"+data)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })
// })


// singup get

router.get('/appointmentdata',async(req,res)=>{
try{
 let user=await AppointData.find()
  // console.log(user)
  res.json(user)

}catch(err){
  console.log(err)
}

})


router.get('/viewdata',async(req,res)=>{
  try{
    let user=await UserData.find().maxTimeMS(20000)
    console.log(user)
    res.json(user)
  }catch(err){
    console.log(err)
  }
})




// department table

router.get('/viewdepartment',async(req,res)=>{
  const getdata=await DepartData.find()
  if(getdata){
  console.log(getdata)
  res.json(getdata)
  }
  else{
    throw err
  }
})


router.post('/department',async(req,res)=>{
  const {dept_id,dept_name,dept_head}=req.body
  if(!dept_id || !dept_name || !dept_head){
    return res.status(422).json({message:"please fill all department column"})
  }
try{

const exists=await DepartData.findOne({dept_name:dept_name})
  if(exists){
    res.status(422).json({message:'department already exists'})
  }



  const user=new DepartData({dept_id,dept_name,dept_head})
      const department=await user.save();
  if(department){
    res.status(201).json({message:'department save successfully'})
  }else{
    res.status(201).json({message:'department data not saved'})
  }

}catch(err){
  console.log(err)
}
})


//doctor table

router.get("/viewdoctor",async(req,res)=>{
  const data=await Docmodel.find()
  if(data){
    res.json(data)
    console.log(data)
  }
})




router.post('/doctorTable', async (req, res) => {
  const { id, name, department, speciality, contact, email } = req.body;
  if (!id || !name || !department || !speciality || !contact || !email) {
    return res.status(422).json({ message: 'Please fill all doctor details' });
  }
  try {
    const user =new Docmodel({ id, name, department, speciality, contact, email });
    const Dataregister = await user.save();
    if (Dataregister) {
      return res.status(201).json({ message: 'Doctor data added successfully' });
    } else {
      return res.status(500).json({ message: 'Failed to save doctor data' });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});




// patient table

router.get("/viewpatient",async(req,res)=>{
  const Data=await PatientData.find()
  if(Data){
    res.json(Data)
  }
})

router.post('/Patient',async(req,res)=>{
  const{Id,Name,Age,Gender,Indate,Outdate,Bed,Payment,Doctor,Contact,Add}=req.body
  if(!Id || !Name || !Age || !Gender ||!Indate ||!Outdate ||!Bed ||!Payment ||!Doctor ||!Contact ||!Add){
    return res.status(422).json({message:"please fill all Patient column"})
       
  }

  try{
    const user=new PatientData({Id,Name,Age,Gender,Indate,Outdate,Bed,Payment,Doctor,Contact,Add})

    const register=await user.save()
    if(register){
      res.status(201).json({message:"patient data add succesful"})
    }else{
      res.status(500).json({message:"patient data not added"})
    }
    




  }catch(err){
   console.log(err)
  }
})


// bed table 

router.post('/bed',async(req,res)=>{
  const{id,floor,status,category,charges}=req.body
  if(!id || !floor || !status ||!category ||!charges){
    return res.status(422).json({message:"bed all data not filled"})
  }
  try{
    const user=new BedSchema({id,floor,status,category,charges})
    const register=await user.save()
    if(register){
      res.status(201).json({message:'bed data saved'})
    }else{
      res.status(500).json({message:'data not send'})
    }
  }catch(err){
    console.log(err)

  }
})

// appointment table

router.post('/appointment',async(req,res)=>{
  const{id,name,age,gender,contact,reason,doctor,payment,paymentstatus}=req.body
  if(!id || !name ||!age ||!gender ||!contact ||!reason ||!doctor ||!payment ||!paymentstatus){
    return res.status(422).json({message:'your appointment all data not filled'})
  }
  try{
    const user=new AppointData({id,name,age,gender,contact,reason,doctor,payment,paymentstatus})
  const register=await user.save();
  if(register){
    res.status(201).json({message:'appointment done '})
  }else{
    res.status(500).json({message:"appointment not done"})
  }
  }catch(err){
    console.log(err)
  }
})



// Services Table

router.post('/services',async(req,res)=>{
  const {id,service,charges,location}=req.body
  if(!id||!service||!charges||!location){
    return res.status(422).json({message:'plz fill all service filled '})
  }
  try{
    const user= new ServiceData({id,service,charges,location,})
    const register=await user.save()
    if(register){
      res.status(201).json({message:'service data send sucessfully'})
    }else{
      res.status(201).json({message:'service data not send '})

    }
  }catch(err){
    console.log(err)
  }
})




router.get("/admin",(req,res)=>{
  res.render("dashboard/admin")
})













router.post('/Login',async(req,res)=>{
  try{
  const{email,password}=req.body;
  if(!email||!password){
  
      return res.status(422).json({massage:'pls enter valid password and email'})
  }
  
       const user=await UserData.findOne({email:email});
      // console.log(user);
     
      if(user)
          {
        const isMatch=await bcrypt.compare(password,user.password);
          const token=await user.generateAuthtoken()
          // console.log(token);

          res.cookie("jwtoken",token,{
              expires:new Date(Date.now()+ 600000000000),
              httpOnly:true
          });
          
       if(!isMatch)
      {
          res.json({error:"invalid credentials"});
     }
     else{
      res.json({message:"login successful"});
     }
         }
         
         
  else{
          res.json({error:"invalid credentials"});
  }
}  catch(err){
      console.log(err);
  }
  });













module.exports=router;














