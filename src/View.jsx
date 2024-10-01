import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";

function View() {
  const navigate = useNavigate();
  const [state, setstate] = useState();
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/userDatabase/${id}`)
      .then((res) => setstate(res.data));
  }, []);

  console.log(state);

  function updateData() {
    console.log(id);
    navigate(`/update/${id}`);
  }
  return (
    <>
      <div className="container">
        <div className="innerContainer">
          <h3 className="usertext">First Name: {state?.fname}</h3>
          <h3 className="usertext">Last Name: {state?.lname}</h3>
          <h3 className="usertext">Email Adress: {state?.email}</h3>
          <div className="buttons">
            <Button
              variant="contained"
              className="add_btn"
              onClick={() => updateData()}
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
    </>
  );
}

export default View;
