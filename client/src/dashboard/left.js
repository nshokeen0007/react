import { NavLink } from "react-router-dom"

function Left(){
return(
<>
<div className="container">
    <div className="row">
<div className="col-12">


<div className="border rounded-3 p-3 text-center">
<div className="border-bottom"><NavLink to="/admin" className="border-bottom">Welcome Page</NavLink>
</div>
<div className="border-bottom"><NavLink to="/viewdata" className="custom-nav-link">Signup</NavLink>
</div>
<div className="border-bottom"><NavLink to="/viewdepartment" className="custom-nav-link">Department Data</NavLink>
</div>
<div className="border-bottom"><NavLink to="/appointmentdata" className="custom-nav-link">Appointment Data</NavLink>
</div>
<div className="border-bottom"><NavLink to="/viewpatient" className="custom-nav-link">Patient Data</NavLink>
</div>
<div className="border-bottom"><NavLink to="/viewdoctor" className="custom-nav-link">Doctor Data</NavLink>
</div>


<div className="border-bottom">a</div>
<h5>FILL FORMS</h5>
<div className="border-bottom"><NavLink to="/bed" className="custom-nav-link">BED </NavLink></div>
<div className="border-bottom"><NavLink to="/doctorTable" className="custom-nav-link"   style={{ textDecoration: 'none', borderBottom: 'none', color: 'inherit' }}>Doctor Table </NavLink></div>
<div className="border-bottom"><NavLink to="/appointment" className="custom-nav-link">Appointment</NavLink></div>
<div className="border-bottom"><NavLink to="/Patient" className="custom-nav-link">Patient </NavLink></div>
<div className="border-bottom"><NavLink to="/services" className="custom-nav-link">Services </NavLink></div>
<div className="border-bottom"><NavLink to="/department" className="custom-nav-link">Department </NavLink></div>

</div>
</div>

    </div>
</div>





</>






)





}
export default Left

