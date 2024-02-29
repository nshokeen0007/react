import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Left from "./left";

function Signupdata() {
  const navigate = useNavigate();
  const [signup, setSignup] = useState([]);

  const callsignup = async () => {
    try {
      const res = await fetch("/viewdata", {
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
      setSignup(data);
    } catch (err) {
      console.error(err);
      navigate("/");
    }
  };

  useEffect(() => {
    callsignup();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Left />
          </div>
          <div className="col-9">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Profile Photo</th>
                </tr>
              </thead>
              <tbody>
                {signup.length > 0 &&
                  signup.map((nik) => (
                    <tr key={nik.username}>
                      <td>{nik.username}</td>
                      <td>{nik.role}</td>
                      <td>{nik.email}</td>
                      <td>
                        <img
                          src={"upload/" + nik.Profilephoto}
                          alt={nik.username}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </td>
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

export default Signupdata;
