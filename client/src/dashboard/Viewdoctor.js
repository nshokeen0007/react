import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Left from "./left";

function Getdoctordata() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchDoctorData = async () => {
    try {
      const res = await fetch('/viewdoctor', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const responseData = await res.json();
      console.log(responseData);
      setData(responseData);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.error(err);
      navigate('/');
    }
  };

  useEffect(() => {
    fetchDoctorData();
  }, []);

  return (
    <>


      <div className="container">
        <div className="row">
            <div className="col-md-3">
                <Left/>
            </div>
            <div className="col-md-9">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Speciality</th>
              <th>Contact</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
            data.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.department}</td>
                <td>{doctor.speciality}</td>
                <td>{doctor.contact}</td>
                <td>{doctor.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
    </>
  );
}

export default Getdoctordata;
