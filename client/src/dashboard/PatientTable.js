import React,{useState} from "react"
import { useNavigate } from "react-router-dom"

 function PatientTable(){
const navigate=useNavigate();
const[user,setUser]=useState({
    Id:'',Name:'',Age:'',Gender:'',Indate:'',Outdate:'',Bed:'',Payment:'',Doctor:'',Contact:'',Add:''
})
let name,value;
const handleInputs=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
}
const PostData=async(e)=>{
    e.preventDefault()
    const{Id,Name,Age,Gender,Indate,Outdate,Bed,Payment,Doctor,Contact,Add}=user;

    const res=await fetch('/Patient',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            Id,Name,Age,Gender,Indate,Outdate,Bed,Payment,Doctor,Contact,Add
        })
    })
    const data=await res.json()
        if(!data){
            window.alert("data not send")
        }else{
             window.alert('data send successfully')
             navigate('/')
        }




}

return(

    <>
    <div className="container ">
 
   <form method="post">
         
                <label >Id</label><br/>
              <input type="text" name="Id" value={user.Id} onChange={handleInputs} /><br/>
              
              <label> Name</label><br/>
              <input type="text" name="Name" value={user.Name} onChange={handleInputs}/><br/>
              <label> Age</label><br/>
              <input type="text" name="Age" value={user.Age} onChange={handleInputs}/><br/>

              <label> Gender</label><br/>
              <input type="text" name="Gender" value={user.Gender} onChange={handleInputs}/><br/>
              <label> In-date</label><br/>
              <input type="date" name="Indate"value={user.Indate} onChange={handleInputs}/><br/>
              <label> Outdate</label><br/>
              <input type="date" name="Outdate" value={user.Outdate} onChange={handleInputs}/><br/>
              <label> Bed-Assign</label><br/>
              <input type="text" name="Bed" value={user.Bed} onChange={handleInputs}/><br/>
              <label> Payment Status</label><br/>
              <input type="text" name="Payment" value={user.Payment} onChange={handleInputs}/><br/>
              <label>Doctor/Incharge</label><br/>
              <input type="text" name="Doctor" value={user.Doctor} onChange={handleInputs}/><br/>
              <lable>Contact</lable><br/>
              <input type="text" name="Contact" value={user.Contact} onChange={handleInputs}/><br/>
              <label>Address</label><br/>
              <input type="text" name="Add" value={user.Add} onChange={handleInputs}/><br/>

              

       

            <button type="submit" onClick={PostData}>submit</button>
            
        </form>
     
    </div>
    
    
    
    </>
)









}

export default PatientTable