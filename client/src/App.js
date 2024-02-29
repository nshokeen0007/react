import React from "react";
import Header from "./header";
import Footer from "./footer"
import Contact from "./contacus"
import Home from "./home"
import Aboutus from "./aboutus"
import Signup from "./signup"
import Login from "./login"
import Appointment from "./appointment"
import Userpanel from "./Userpanel";
import CardiologyAbout from "./cardiologyabout";
import NeurologistAbout from "./aboutNeurologist";
//admin
import DocModel from "../src/dashboard/doctorTable";
import PatientTable from "./dashboard/PatientTable";
import BedTable from "./dashboard/BedTable";
import ServiceTable from './dashboard/ServiceTable'
import Deptabel from "./dashboard/DepartmentTable"; 
import Appointmentdata from "./appointmentdata";
import Admin from "./dashboard/admin";
import Signupdata from "./dashboard/singupdata";
import DepartmentData from "./dashboard/viewDepartment";
import Getpatientdata from "./dashboard/Pateintdata";
import Getdoctordata from "./dashboard/Viewdoctor";




import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import OrthopedicAbout from "./aboutOrtho";


function App(){
  return(
    <>
 <Router>
 <Header/>


<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/Aboutus" element={<Aboutus/>}></Route>
<Route path="/Contact" element={<Contact/>}></Route>
<Route path="/Cardiology" element={<CardiologyAbout/>}></Route>
<Route path="/Neuro" element={<NeurologistAbout/>}></Route>
<Route path="/Ortho" element={<OrthopedicAbout/>}></Route>
<Route path="/Signup" element={<Signup/>}></Route>
<Route path="/Login" element={<Login/>}></Route>
<Route path="/appointment" element={<Appointment/>}></Route>
<Route path="/Userpanel" element={<Userpanel/>}></Route>
<Route path="/doctorTable" element={<DocModel/>}></Route>
<Route path="/Patient" element={<PatientTable/>}></Route>
<Route path="/bed" element={<BedTable/>}></Route>
<Route path='/services' element={<ServiceTable/>}></Route>
<Route path="/department"element={<Deptabel/>}> </Route>
<Route path="/appointmentdata"element={<Appointmentdata/>}> </Route>
<Route path="/admin"element={<Admin/>}> </Route>
<Route path="/viewdata"element={<Signupdata/>}> </Route>
<Route path="/viewdepartment"element={<DepartmentData/>}> </Route>
<Route path="/viewpatient"element={<Getpatientdata/>}> </Route>
<Route path="/viewdoctor"element={<Getdoctordata/>}> </Route>



</Routes>

<Footer/>


</Router>









    
    </>
  )
}



export default App 
