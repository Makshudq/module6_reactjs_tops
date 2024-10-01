import TextField from "@mui/material/TextField";
import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Create() {
  let fnameref = useRef();
  let lnameref = useRef();
  let emailref = useRef();

  const [userdata, setuserdata] = useState([]);

  const navigate = useNavigate();

  function adduserdata() {
    if (fnameref.current.value && lnameref.current.value) {
      let userInformation = {
        fname: fnameref.current.value,
        lname: lnameref.current.value,
        email: emailref.current.value,
      };

      axios
        .post("http://localhost:3000/userDatabase", userInformation)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      fnameref.current.value = "";
      lnameref.current.value = "";
      emailref.current.value = "";

      navigate("/");
    } else {
      alert("Please provide first and Last name");
    }
  }

  return (
    <>
      <div className="container">
        <div className="innerContainer">
          <div className="textField_grp">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              inputRef={fnameref}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              inputRef={lnameref}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              inputRef={emailref}
            />
          </div>
          <Button
            variant="contained"
            className="add_btn"
            onClick={() => adduserdata()}
          >
            Add 1 User
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
    </>
  );
}

export default Create;
