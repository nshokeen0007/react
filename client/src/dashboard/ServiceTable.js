import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function ServiceTable(){
    const navigate=useNavigate();
    const [user,setData]=useState({
  id:'',service:'',charges:'',location:''
    })
    let name,value;
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setData({...user,[name]:value})
    }
      const PostData=async(e)=>{
        e.preventDefault();
      const {id,service,charges,location}=user;
      const res=await fetch('/services',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"

        },
        body:JSON.stringify({
            id,service,charges,location
  })
      })
      const data=res.json()
      if(data.status===422|| !data){
        window.alert('data send')
      }
      else{
        window.alert('data send')
        navigate('/')
      }

      }
    return(
<>
<div className='container'>
    <form method="post">
        <label>ID</label><br/>
        <input type="text" name="id" value={user.id} onChange={handleInputs}/><br/>
     
        <label>Service</label><br/>
        <input type="text" name="service" value={user.service} onChange={handleInputs}/><br/>
     
        <label>Charges</label><br/>
        <input type="text" name="charges" value={user.charges} onChange={handleInputs}/><br/>
     
        <label>Location</label><br/>
        <input type="text" name="location" value={user.location} onChange={handleInputs}/><br/>
        <button type='submit' onClick={PostData}>submit</button>
     
    </form>
</div>
</>
    )
}


export default ServiceTable