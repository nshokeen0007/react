import react,{useState,useEffect} from "react"
import Left from "./left";
function Getpatientdata(){

const [patient,setpatient]=useState([]);

const callPatient=async()=>{
    try{
        const res=await fetch("/viewpatient",{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
            },
            credentials:"include",

        });
        if(!res.ok){
            throw new Error(res.statusText)
        }
        const data= await res.json()
        setpatient(data)

    }catch(Err){
        console.error(Err)

    }
}
useEffect(()=>{
    callPatient();
},[]);

return(
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <Left/>
            </div>
            <div className="col-md-9">
                <table className="table table-bordered ">
               <thead>
                <tr>
                    <th>S.no</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Indate</th>
                    <th>Outdate</th>
                    <th>Bed-Assign</th>
                    <th>Payment Status</th>
                    <th>Doctor/Incharge</th>
                    <th>Contact</th>
                    <th>Address</th>
                </tr>
               </thead>
               <tbody>
               {patient.length > 0 &&
            patient.map((patient,index) => (
              <tr key={patient.id}>
                <td>{index+1}</td>
                <td>{patient.Id}</td>
                <td>{patient.Name}</td>
                <td>{patient.Age}</td>
                <td>{patient.Gender}</td>
                <td>{patient.Indate}</td>
                <td>{patient.Outdate}</td>
                <td>{patient.Bed}</td>
                <td style={{ color: patient.Payment === "Paid" ? "green" : "red" }}>
                  {patient.Payment}
                </td>
                <td>{patient.Doctor}</td>
                <td>{patient.Contact}</td>
                <td>{patient.Add}</td>
              </tr>
            ))}
          </tbody>
                </table>
            </div>
        </div>
    </div>
    
    
    </>
)

}
export default Getpatientdata;