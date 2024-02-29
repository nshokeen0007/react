
// import Image from './images/dr2.jpg'
import React,{useState,useEffect} from 'react'
import {  useNavigate } from 'react-router-dom'


function Userpanel(){






const navigate = useNavigate();
const [userData,setUserData]=useState({});
const callAboutpage = async() => {
    try{
    const res=await  fetch('/UserPanel',{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        credentials:"include"
    });
    const data=await res.json();
    console.log(data);
    setUserData(data);
    if(!res.status===200)
    {
      const error=new Error(res.error);
      throw error;
    }
}catch(err){
console.log(err);
navigate('/Login')
} 
}

useEffect(()=>
{
    callAboutpage();
},
[]);





    return(
<>



<div class="container mt-5 p-3 border rounded-2">
    <div class="row">
<div class="col-5">
  <div className="border rounded-3 ">
<div class="card border-0 my-4 ps-5" >
 
  <img src={"upload/"+userData.Profilephoto} alt="s" className='rounded-circle ' style={{width:100}}/>

  <div class="card-body">
    <h4 class="card-title">{userData.username}</h4>
    <p>Email: {userData.email}</p>
    {/* <p>contact:</p>
    <p>Gender:</p> */}
   
  


  </div>
</div>
</div>
</div>

<div class="col-7 ">
       
<div className='container border'>
<h1>Upcoming appointments</h1>

<h1>View Doctors</h1>
<h1> View beds</h1>






</div>



</div>






    </div>
   </div>
   

















</>


    )
}


export default Userpanel

