import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function BedTable(){
    
    const navigate=useNavigate();
    const[user,setData]=useState({
        id:'',floor:'',category:'',status:'',charges:''

    })
    let name,value;
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setData({...user,[name]:value})
    }
    const PostData=async(e)=>{
        e.preventDefault();
        const{id,floor,category,status,charges}=user;
  
        const res=await fetch('/bed',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                id,floor,category,status,charges
            })
        })

        const data=await res.json();
        if(data.status === 422||!data){
            window.alert('data not send')
        }else{
            window.alert('data send ')
            navigate('/')
        }
    }

    return(
        <>
        <div className='container d-flex'>
            <form method="post">
                <label>Id</label><br/>
                <input type="text" name="id" value={user.id} onChange={handleInputs}/><br/>
           
                <label>Floor</label><br/>
                <input type="text" name="floor" value={user.floor} onChange={handleInputs}/><br/>
                <label>Status</label><br/>
                <input type='text' name="status" value={user.status} onChange={handleInputs}/><br/>
                <label>Category</label><br/>
                <input type='text' name='category' value={user.category} onChange={handleInputs}/><br/>
                <label >Charges</label><br/>
                <input type="text" name='charges' value={user.charges} onChange={handleInputs}/><br/>
                <button type='submit' onClick={PostData}>submit</button>
            </form>

        </div>
        </>
    )
}
export default BedTable