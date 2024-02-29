import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Deptabel(){

    const navigate=useNavigate()
    const [user,setDep]=useState({
        dept_id:'',dept_name:'',dept_head:''
    })
    let name,value;
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setDep({...user,[name]:value})
    }
    const PostData=async(e)=>{
     e.preventDefault();
     const{dept_id,dept_name,dept_head}=user;
     const res=await fetch("/department",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            dept_id,dept_name,dept_head
        })
    
     })

     const data=await res.json();
     if(res.status===422||!data){
        window.alert("data not send")
     }
     else{
        window.alert("data send")
        navigate('/')
     }
    }



    return(
        <>
        <div>
            <form method='post'>
                <label>department id</label><br/>
                <input type='text' name='dept_id' value={user.dept_id} onChange={handleInputs}/><br/>
                <label>department name</label><br/>
                <input type='text'  name='dept_name' value={user.dept_name} onChange={handleInputs}/><br/>
                <label>department Head</label><br/>
                <input type="text" name='dept_head' value={user.dept_head} onChange={handleInputs}/><br/>
                <button type='submit' onClick={PostData}>submit</button>
            </form>
            
            
            
            
            
            
            
            
            </div></>
    )
}

export default Deptabel