import React from "react";
import TextField from "@mui/material/TextField";
import { useRef, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  let fnameref = useRef();
  let lnameref = useRef();
  let emailref = useRef();
  const { id } = useParams();

  const navigate = useNavigate();

  function updateuseData() {
    axios.put(`http://localhost:3000/userDatabase/${id}`, {
      fname: fnameref.current.value,
      lname: lnameref.current.value,
      email: emailref.current.value,
    });

    navigate("/");
  }

  const [userdata, setuserdata] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/userDatabase/${id}`)
      .then((res) => setuserdata(res.data));
  }, []);

  console.log(userdata);
  return (
    <div>
      <div className="container">
        <div className="innerContainer">
          <h2>Update user Information</h2>
          <div className="textField_grp">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              inputRef={fnameref}
              InputLabelProps={{ shrink: true }}
              value={userdata.fname}
              onChange={(e) =>
                setuserdata({ ...userdata, fname: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              inputRef={lnameref}
              InputLabelProps={{ shrink: true }}
              value={userdata.lname}
              onChange={(e) =>
                setuserdata({ ...userdata, lname: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              inputRef={emailref}
              InputLabelProps={{ shrink: true }}
              value={userdata.email}
              onChange={(e) =>
                setuserdata({ ...userdata, email: e.target.value })
              }
            />
          </div>
          <Button
            variant="contained"
            className="add_btn"
            onClick={() => updateuseData()}
          >
            Update
          </Button>
          <Button
            variant="contained"
            className="add_btn"
            onClick={() => navigate("/")}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Update;
