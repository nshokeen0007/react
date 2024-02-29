const mongoose=require('mongoose')


const departmentschema=new mongoose.Schema({


    dept_id:{
      type:String,
      require:true,
    },
    dept_name:{
        type:String,
        require:true,
    },
    dept_head:{
        type:String,
        require:true,
    }


})

const DepartModel=mongoose.model('department',departmentschema)


module.exports=DepartModel