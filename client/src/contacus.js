import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {


  const navigate = useNavigate();
  const [userData,setUser]=useState({  username:'',email:'',message:''});
  const callContactpage = async() => {
      try{
      const res=await  fetch('/Contact',{
          method:"GET",
          headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
          },
       
      });
      const data=await res.json();
      console.log(data);
      setUser(data);
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
      callContactpage();
  },
  []);

//  


let name,value;
const handleInputs=(e)=>{
  name=e.target.name;
  value=e.target.value;
  setUser({...userData,[name]:value});
}
const postData=async(e) =>{
  e.preventDefault();
  const{username,email,message}=userData;

  const res=await fetch('/Contact',{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      username,email,message
    })


  });

  const data=await res.json();
  if(!data){
    // window.alert("message send");
    console.log("send")
  }
  else{
    window.alert("send successful")
    // console.log('message send')
    setUser({...userData,message:""})
    navigate('/Login')



  }

}




// 

 



  return (

<>
<div className="container bg-black">
<form className=" mt-2" method='post'>
   

     <table className="table table-responsive">
       <tbody>
         <tr>
           <td>
             <label htmlFor="email">Email:</label>
           </td>
           <td>
             <input type="text" id="id" name="email" value={userData.email} onChange={handleInputs} required className="form-control" />
           </td>
         </tr>
         <tr>
           <td>
             <label htmlFor="name">UserName:</label>
           </td>
           <td>
             <input type="text" id="name" name="username" value={userData.username} onChange={handleInputs}  required className="form-control" />
           </td>
         </tr>
         <tr>
          <td>
          <label htmlFor="name">enter your message here</label>
          </td>
          <td>
         
             <textarea type="text" id="conatct" name="message" value={userData.message} onChange={handleInputs} required className="form-control " />
            
             </td>
         </tr>
 <tr className="text-end">  <button type="submit" className="btn btn-primary "onClick={postData}>Submit</button></tr>


         
       </tbody>
     </table>

 </form>
 </div>




</>



  );
}

export default Contact;
