import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';



function DoctorForm() {


  const navigate=useNavigate();
  const[user,setUser]=useState({
    id:'',name:'',department:'',speciality:'',contact:'',email:''
  })
let name,value;
const handleInputs=(e)=>{
  name=e.target.name;
  value=e.target.value;
  setUser({...user,[name]:value});
}
const postData=async(e)=>{
  e.preventDefault();
  const{id,name,department,speciality,contact,email}=user;
  const res=await fetch('/doctorTable',{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      id,name,department,speciality,contact,email
    })
  });
  const data=await res.json();
  if(data){
    window.alert(" data send")
    navigate('/')
  }else{
   window.alert("data not send")
  }

}

  return (
    <>
    <div className="container text-center bg-info">
    <form method="post" >
      <label htmlFor="id">ID</label><br/>
      <input type="text" id="id" name="id" value={user.id} onChange={handleInputs}  placeholder='Enter your Id'/><br/>

      <label htmlFor="name">Name</label><br/>
      <input type="text" id="name" name="name" value={user.name} onChange={handleInputs} placeholder='Enter your Name' /><br/>

      <label htmlFor="department">Department</label><br/>
      <input
        type="text"
        id="department"
        name="department"
        value={user.department}
        onChange={handleInputs}
        placeholder='Enter your Department'
    
      /><br/>

      <label htmlFor="speciality">Speciality</label><br/>
      <input
        type="text"
        id="speciality"
        name="speciality"
        value={user.speciality}
        onChange={handleInputs}
        placeholder='Enter your Speciality'
       
      /><br/>

      <label htmlFor="contact">Contact</label><br/>
      <input type="text" id="contact"name="contact" value={user.contact} onChange={handleInputs}
      placeholder='Enter your Contact details' /><br/>

      <label htmlFor="email">Email</label><br/>
      <input type="text" id="email" name="email"  value={user.email} onChange={handleInputs} placeholder='Ex:xyz@gmail.com' /><br/><br/>

      <button type="submit" onClick={postData}>Submit</button>
    </form>
    </div>

    </>
  );
};

export default DoctorForm;
