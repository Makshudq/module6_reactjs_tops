import * as React from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useRef } from "react";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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

function Userinfo({ item, deletedata, updateData, viewuser }) {
  return (
    <>
      <StyledTableRow key={item.id}>
        <StyledTableCell component="th" scope="row">
          {item.fname}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {item.lname}
        </StyledTableCell>
        <StyledTableCell align="center">{item.email}</StyledTableCell>
        <StyledTableCell align="center">
          <Button
            variant="contained"
            onClick={() => updateData(item.id)}
            className="update_btn"
          >
            Update
          </Button>
          <Button
            variant="contained"
            sx={{ color: "#fff", background: "red" }}
            onClick={() => deletedata(item.id)}
            className="delete_btn"
          >
            Delete
          </Button>
          <Button
            variant="contained"
            className="view_btn"
            onClick={() => viewuser(item.id)}
          >
            View
          </Button>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
}

export default Userinfo;
