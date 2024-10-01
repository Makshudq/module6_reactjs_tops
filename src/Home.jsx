import React, { useEffect } from "react";

import Button from "@mui/material/Button";
import { useState } from "react";
import Userinfo from "./Userinfo";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function Home() {
  const navigate = useNavigate();
  const [userdata, setuserdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/userDatabase")
      .then((result) => setuserdata(result.data));
  }, []);

  async function deletedata(id) {
    console.log(id);
    let undeleteddata = userdata.filter((item) => item.id !== id);
    setuserdata(undeleteddata);
    try {
      const response = await axios.delete(
        `http://localhost:3000/userDatabase/${id}`
      );
      console.log(response.data);
    } catch (err) {
      console.log(err.response), console.log(err.message);
    }
  }

  function updateData(id) {
    console.log(id);
    navigate(`/update/${id}`);
  }
  function viewuser(id) {
    console.log(id);
    navigate(`/view/${id}`);
  }

  return (
    <div>
      <div className="container">
        <div className="innerContainer">
          <Button
            variant="contained"
            onClick={() => navigate("/create")}
            className="add_btn"
          >
            Add User
          </Button>
          <div className="user_info">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>User First Name</StyledTableCell>
                    <StyledTableCell align="center">
                      User Last Name
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      User Email{" "}
                    </StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userdata.map((item) => (
                    <Userinfo
                      item={item}
                      deletedata={deletedata}
                      updateData={updateData}
                      viewuser={viewuser}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
