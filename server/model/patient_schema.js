const mongo=require('mongoose')
const PatientSchema=new mongo.Schema({
    Id:{
        type:String,
        require:true
    },
    Name:{
        type:String,
        require:true
    },
    Age:{
        type:String,
        require:true
    },
    Gender:{
        type:String,
        require:true

    },
    Indate:{
        type:String
    },
    Outdate:{
        type:String
    },
    Bed:{
        type:String,
        require:true
    },
    Payment:{
        type:String,
        require:true
    },
    Doctor:{
        type:String,
        require:true
    },
    Contact:{
        type:String,
        require:true
    },
    Add:{
        type:String,
        require:true
    }
})


const PatientModel=mongo.model('Patient',PatientSchema)

module.exports=PatientModel