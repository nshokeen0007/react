import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Left from "./left";

function DepartmentData() {
  const navigate = useNavigate();
  const [signup, setDepart] = useState([]);

  const callDepart = async () => {
    try {
      const res = await fetch("/viewdepartment", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      console.log(data);
      setDepart(data);
    } catch (err) {
      console.error(err);
      navigate("/");
    }
  };

  useEffect(() => {
    callDepart();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Left />
          </div>
          <div className="col-9">
            <table className="table table-bordered mt-4">
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Dept_id</th>
                  <th>Dept_name</th>
                  <th>Dept_head</th>
                </tr>
              </thead>
              <tbody>
                {signup.length > 0 &&
                  signup.map((nik,index) => (
                    <tr key={nik.dept_id}>
                    
                      <td>{index+1}</td>
                      <td>{nik.dept_id}</td>
                      <td>{nik.dept_name}</td>
                      <td>{nik.dept_head}</td>
                     
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

export default DepartmentData;
