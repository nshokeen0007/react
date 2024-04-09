import React, { useState, useRef } from 'react'
import loginimg from "./images/login.gif"
import bg1 from "./images/bg11.png"
import { useNavigate } from "react-router-dom";



function Login() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '', password: ''
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }
  const postData = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const res = await fetch("/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("plz fill");
      console.log("invalid register")
    }
    else {
      window.alert("login");
      console.log("valid register")
      navigate('/UserPanel');
    }
  }


  return (
    <>

      <div className=' bglog'>
    <div className="container">
    <div className=' row justify-content-start'>
          {/* <div className='col-md-6  text-md-end text-center d-none d-sm-block'>
    <img src={loginimg} alt="doctorlogin " className='w-75 bb'/>
   </div> */}


          <div className='col-xl-3 col-md-5 shadowLogin  mt-3 pt-5 mb-4 rounded-4 glass h-100'>

            <form id="login" method="post" >
              <label className='text-info text-start'><b>Email</b></label><br />
              <input type="email" name="email" placeholder="Email" className='cinput' value={user.email} onChange={handleInputs} /><br />

              <label><b className="mb-5 text-info">Password</b></label><br />
              <input type="password" name="password" placeholder="Password" className='cinput' value={user.password} onChange={handleInputs} /><br /><br />

              <div className="d-flex justify-content-between">
                <div><input type="checkbox" id="check" />
                  <span className='text-light ps-2'>Remember me</span></div>

                <div><a href="/" className="justify-content-end text-end text-light text-decoration-none">Forgot Password?</a></div>
              </div>
              <button type="submit" className="btn btn-outline-light rounded-1 w-100 py-2 mt-4 " onClick={postData}>LOG IN</button><br /><br />
             
            </form>

          </div>
          <img src={bg1} alt="doctorlogin " className='w-75 c'/>
        </div>
    </div>
      </div>







    </>
  )
}


export default Login