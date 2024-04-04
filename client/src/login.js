import React,{useState} from 'react'
import loginimg from "./images/login.gif"
import { useNavigate } from "react-router-dom";



function Login(){

  const navigate=useNavigate();
  const[user,setUser]=useState({
  email:'', password:''});
  let name,value;
  const handleInputs=(e)=>{
  console.log(e);
  name= e.target.name;
  value= e.target.value;
  setUser({...user,[name]:value});
  }
  const postData=async(e)=>{
  e.preventDefault();
  const {email,password}=user;
  const res=await fetch("/Login",{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          email, password
      })
  });
  const data=await res.json();
  if(data.status === 422 || !data){
      window.alert("plz fill");
      console.log("invalid register")
  }
  else{
    window.alert("login");
      console.log("valid register")
      navigate('/UserPanel');
  }
  }











    return(
        <>
        
    <div className='container '>
    <div className=' row'>
   <div className='col-md-6  text-md-end text-center d-none d-sm-block'>
    <img src={loginimg} alt="doctorlogin " className='w-75 bb'/>
   </div>
   <div className='col-xl-3 col-md-5 shadowLogin text-center mt-3 pt-5 mb-4 rounded-4'>
     
        <form id="login" method="post" >
          <label className='text-info'><b>Email</b></label><br/>
          <input type="email" name="email" placeholder="Email"  value={user.email} onChange={handleInputs}/><br />

          <label><b className="mb-5 text-info">Password</b></label><br/>
          <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleInputs}/><br /><br />

          <button type="submit" className="bg-danger text-light rounded-1" onClick={postData}>LOG IN</button><br /><br />

          <input type="checkbox" id="check" />
          <span>Remember me</span><br /><br />

          <a href="/" className="justify-content-end text-end">Forgot Password?</a>
        </form>
     
        </div>
        </div>
        </div>
        
        </>
    )
}


export default Login