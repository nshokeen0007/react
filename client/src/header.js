// import React, { useState } from "react";
import { NavLink} from "react-router-dom";
// import {useState} from "react"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Header() {
  // const[data,setdata] =useState("login")
// const b =() =>{
//   setdata(true);
// }
// const c =()=>{
//   setdata(false);
// }
 
    return (
      
              <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-info sticky-top">
                  <NavLink to='/' className="navbar-brand" >ORBITCare</NavLink>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
          
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto">

                  <li className="nav-item ">
                  <NavLink to='/' className="nav-link" >HOME</NavLink> 
      </li>
                     
               <li className="nav-item">
              <NavLink to='/Aboutus'className="nav-link" >ABOUT</NavLink>
               </li>
           <li className="nav-item">
            <NavLink to='/Contact'className="nav-link" >Contact</NavLink>
            </li>
           <li className="nav-item">
            <NavLink to='/Userpanel'className="nav-link" >My Profile</NavLink>
            </li>
            
                     
                    </ul>
                    <form className="form-inline d-inline ">
                  
                    <NavLink to='/Signup'className="nav-item" ><button className="btn btn-outline-success me-2 my-sm-0" type="submit">Register yourself</button></NavLink>
                  
                    <NavLink to='/login'className="nav-item" ><button className="btn btn-outline-danger my-2 my-sm-0" type="submit"  >login</button></NavLink>
                    {/* <div>{data ?  (<Link to="/login" ><button onClick={()=>setdata("login")}>login</button></Link>) : (<button onClick={()=>setdata("logout")}>logout</button>)}</div> */}
                    </form>
                  </div>
                </nav>
              </div>
       
          
      
          
    );
  }
  
  export default Header;
  