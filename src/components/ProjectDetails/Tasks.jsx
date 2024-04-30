import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#6777ef", // Changing header bg color
    color: theme.palette.common.white,
    fontFamily: "DMM", // Setting font family for header text
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: "DMM", // Setting font family for body text
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Tasks({ tasks }) {
  const getStatusColor = (status) => {
    return status === true ? "#17c864" : "#d03369";
  };
  const navigate = useNavigate(); // Initialize useNavigate hook
  const getAvatarSrc = (name) => {
    switch (name) {
      case "Kartikey":
        return "https://firebasestorage.googleapis.com/v0/b/snipify-bda1e.appspot.com/o/images%2Fkartik-pic.jpg?alt=media&token=8b9c9a86-5769-4e1f-aa67-3ddceda9d0a4";
      case "Praveen":
        return "https://firebasestorage.googleapis.com/v0/b/snipify-bda1e.appspot.com/o/images%2Fpraveen-pic.jpg?alt=media&token=8b9c9a86-5769-4e1f-aa67-3ddceda9d0a4";
      case "Kaif":
        return "https://firebasestorage.googleapis.com/v0/b/snipify-bda1e.appspot.com/o/images%2Fkaif-pic.jpg?alt=media&token=8b9c9a86-5769-4e1f-aa67-3ddceda9d0a4";
      case "Kriti":
        return "https://firebasestorage.googleapis.com/v0/b/snipify-bda1e.appspot.com/o/images%2Fkriti-pic.jpg?alt=media&token=8b9c9a86-5769-4e1f-aa67-3ddceda9d0a4";
      default:
        return "";
    }
  };

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px",
            backgroundColor: "#fff",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.5em",
              marginLeft: "10px",
              fontFamily: "DMM",
            }}
          ></div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px 10px",
                backgroundColor: "#e2a33e",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
                fontFamily: "DMM",
              }}
              onClick={()=>{navigate('/createTask')}}
            >
              Add
              <IoIosAddCircle style={{ marginLeft: "15px" }} />
            </button>
          </div>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Avatar</StyledTableCell>
              <StyledTableCell>Task Title</StyledTableCell>
              <StyledTableCell>Task Description</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <StyledTableRow key={task.id}>
                <StyledTableCell>{task.assigned_name}</StyledTableCell>
                <StyledTableCell>
                  <Avatar
                    alt={task.assigned}
                    src={getAvatarSrc(task.assigned_name)}
                    sx={{ width: 24, height: 24 }}
                  />
                </StyledTableCell>
                <StyledTableCell>{task.name}</StyledTableCell>
                <StyledTableCell>{task.name}</StyledTableCell>
                <StyledTableCell>
                  <span
                    style={{
                      backgroundColor: getStatusColor(task.status),
                      color: "white",
                      borderRadius: 4,
                      padding: "2px 8px",
                      fontSize: "13px",
                    }}
                  >
                    {task.status ? "Completed" : "Ongoing"}
                  </span>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
