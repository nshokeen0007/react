    import React,{useState} from 'react'
    import { useNavigate } from 'react-router-dom'

    function Appointment(){

  const navigate=useNavigate();
  const[user,appointUser]=useState({
    id:'',name:'',age:'',gender:'',contact:'',reason:'',doctor:'',payment:'',paymentstatus:''
  })
let name,value;
const handleInputs=(e)=>{
    name=e.target.name;
    value=e.target.value;
    appointUser({...user,[name]:value});
}
const postData=async(e)=>{
    e.preventDefault();
    const{id,name,age,gender,contact,reason,doctor,payment,paymentstatus}=user;

    const res=await fetch('/appointment',{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            id,name,age,gender,contact,reason,doctor,payment,paymentstatus
        })

    });

const data=await res.json();
console.log(data)
if(data.status === 422 || !data){
    window.alert("appointment not done")
    console.log(" appointment not done")
}
else{
    window.alert("appointment done")
    console.log("appointment done")


    navigate('/')
}





}



















        return(

          <>
          <form className="appointment-form">
   
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="id">ID:</label>
                  </td>
                  <td>
                    <input type="text" id="id" name="id" value={user.id} onChange={handleInputs} required className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="name">Name:</label>
                  </td>
                  <td>
                    <input type="text" id="name" name="name" value={user.name} onChange={handleInputs} required className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="age">Age:</label>
                  </td>
                  <td>
                    <input type="text" id="age" name="age" value={user.age} onChange={handleInputs} required className="form-control" />
                  </td>
                </tr>
                <tr>
                <td>
    <label >Gender:</label>
  </td>
  {/* <td>
    <select id="gender" name="gender" value={user.gender} onChange={handleInputs} required className="form-select">
    <option >select gender</option>
      <option >Male</option>
      <option >Female</option>
      <option >Other</option>
    </select>
  </td> */}
<td>
  <select id="gender" name="gender" value={user.gender} onChange={handleInputs} required className="form-select">
    <option value="">Select gender</option>
    {["Male", "Female", "Other"].map((option) => (
      <option key={option} value={option}>{option}</option>
    ))}
  </select>
</td>


  {/* <td>

  <input type="radio" name="gender" value="male" checked={user.gender === "male"} onChange={handleInputs} /> Male
  <input type="radio" name="gender" value="female" checked={user.gender === "female"} onChange={handleInputs} /> Female


  </td> */}
  <td>

  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="contact">Contact:</label>
                  </td>
                  <td>
                    <input type="text" id="contact" name="contact" value={user.contact} onChange={handleInputs} required className="form-control" />
                  </td>
                </tr>
                <tr>
                <td>
                    <label htmlFor="reason">Reason:</label>
                  </td>
                  <td>
                    <input type="text" id="reason" name="reason" value={user.reason} onChange={handleInputs} required className="form-control" />
                  </td>
 
</tr>
                <tr>
                  <td>
                    <label htmlFor="doctor">Doctor:</label>
                  </td>
                  <td>
                    <input type="text" name="doctor" value={user.doctor} onChange={handleInputs} required className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="payment">Payment:</label>
                  </td>
                  <td>
                    <input type="text" id="payment" name="payment" value={user.payment} onChange={handleInputs} required className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="paymentstatus">Payment Status:</label>
                  </td>
                  <td>
                    <input
                      type="text" id="paymentstatus" name="paymentstatus"value={user.paymentstatus} onChange={handleInputs}
required className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button type="submit" onClick={postData} className="btn btn-primary">Submit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
        

        </>

        )

    }



    export default Appointment