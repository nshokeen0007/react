import React,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom"
import Left from "./dashboard/left"


function Appointmentdata(){

    const navigate=useNavigate()
    const[data,setdata]=useState({})
    const callApointmentpage = async() => {
        try{
        const res=await  fetch('/appointmentdata',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        });
        const data=await res.json();
        console.log(data);
        setdata(data);
        if(!res.status===200)
        {
          const error=new Error(res.error);
          throw error;
        }
    }catch(err){
    console.log(err);
    navigate('/')
    } 
    }
    
    useEffect(()=>
    {
        callApointmentpage();
    },
    []);

    return(
        <>

<div className="container">
        <div className="row">
          <div className="col-3">
            <Left />
          </div>
          <div className="col-9">
          <table className="table table-bordered">
           
           <thead>
            <tr>
           <th>Id</th>
           <th>Name</th>
           <th>Age</th>
           <th>Gender</th>
           <th>Contact</th>
           <th>Reason</th>
           <th>Doctor</th>
           <th>Payment</th>
           <th>Paymentstatus</th>
           </tr>
           </thead>

           <tbody >
         
        
           


        

         {data.length > 0 && (
           data.map((user) => (
             
             <tr key={user._id} className="border-bottom " >
               <td >{user.id}</td>
               <td>{user.name}</td>
               <td>{user.age}</td>
               <td>{user.gender}</td>
               <td>{user.contact}</td>
               <td>{user.reason}</td>
               <td>{user.doctor}</td>
               <td>{user.payment}</td>
               <td  style={{
              color: user.paymentstatus === "Done" ? "green" : "red",
               }}>{user.paymentstatus}</td>
             </tr>
            
           ))
         )}
 




</tbody>
</table>
            
          </div>
        </div>
      </div>
   
     

       


        </>
    )
}

export default Appointmentdata