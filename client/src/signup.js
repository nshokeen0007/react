// import React,{useState} from "react"

// import { useNavigate } from "react-router-dom";
// import axios from 'axios'

 

// function Signup(){

//   const navigate=useNavigate();
//   const[user,setUser]=useState({
//     username:'',password:'',role:'',email:'',Profilephoto:''

//   });

//   let name,value;
//   const handleInputs=(e)=>{
//     name=e.target.name;
//     value=e.target.value;
//     setUser({...user,[name]:value});
//   }
//   const postData=async(e) =>{
//     e.preventDefault();
//     const{username,password,role,email,Profilephoto}=user;

//     const res=await fetch('/signup',{
//       method:"post",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify({
//         username,password,role,email,Profilephoto
//       })
//     });
 

//     const data=await res.json();
//     if(data.status === 422 || !data){
//       window.alert("invalid register");
//       console.log("invalid register")
//     }
//     else{
//       window.alert("valid register")
//       console.log('valid register')

//       navigate("/login")
//     }

//   }

//     return(

//         <>

        
  
//       <div className="container-fluid ">
//         <h2 className="">Signup Page</h2>
//         <div className="login">
//           <form method="post" name="form1"  >
//             <label htmlFor="username">Username</label><br />
//             <input type="text" name="username"  value={user.username} onChange={handleInputs}/><br />

 

//             <label htmlFor="password">Password</label><br />
//             <input type="password" name="password" value={user.password} onChange={handleInputs}  /><br />

//             <label htmlFor="role">Role</label><br />
//             <input type="password" name="role"  value={user.role} onChange={handleInputs}/><br />
// {/* 
//             <label htmlFor="token">token</label><br />
//             <input type="tel" name="token" value={user.token} onChange={handleInputs} /><br /> */}

//             <label htmlFor="email">Email</label><br />
//             <input type="email" name="email" value={user.email} onChange={handleInputs}/><br /><br />

//             <label>Profilephoto</label><br />
//             <input type="file" name="Profilephoto"  value={user.Profilephoto} onChange={handleInputs}/><br /><br />

        



//             <input type="submit" name="submit" onClick={postData}/>
//           </form>
//         </div>
//       </div>
  


        
        
        
        
        
        
//         </>
//     )
// }

// export default Signup;













//   madam method #################


import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate=useNavigate();
    const [user, setNewUser] = useState(
        {
           username:'',password:'',role:'',email:'',Profilephoto:''
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', user.username);
        formData.append('password', user.password);
        formData.append('role', user.role);
        formData.append('email',user.email);
        formData.append('Profilephoto',user.Profilephoto)

        axios.post('/signup', formData)
             .then(res => {
                console.log(res);
                window.alert('data send successfull')
                navigate('/')
             })
             .catch(err => {
                console.log(err);
             });
    }

    const handleChange = (e) => {
        setNewUser({...user, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewUser({...user, Profilephoto:e.target.files[0]});
    }
    return(
        <>
    <div className="container-fluid">
      <h2 className="">Signup Page</h2>
      <div className="login">
         <form onSubmit={handleSubmit}  >
           <label htmlFor="username">Username</label><br />
           <input type="text" name="username"  value={user.username}  onChange={handleChange}  /><br />

 

           <label htmlFor="password">Password</label><br />
          <input type="password" name="password" value={user.password} onChange={handleChange}  /><br />

           <label htmlFor="role">Role</label><br />
           <input type="password" name="role"  value={user.role} onChange={handleChange}/><br />

 {/* 
 //             <label htmlFor="token">token</label><br />
//             <input type="tel" name="token" value={user.token} onChange={handleInputs} /><br /> */}


           <label htmlFor="email">Email</label><br />
          <input type="email" name="email" value={user.email} onChange={handleChange}/><br /><br />

           <label>Profilephoto</label><br />
        <input type="file" name="Profilephoto"  onChange={handlePhoto}/><br /><br />

        



           <input type="submit" name="submit"/>
         </form>
     </div>
     </div>
</>
    )
}
export default Signup;