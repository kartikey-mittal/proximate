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

const tasks = [
  {
    id: 1,
    name: "Kartikey Mittal",
    title: "Task 1",
    description: "Description for Task 1",
    status: "Ongoing",
  },
  {
    id: 2,
    name: "Praveen Tomar",
    title: "Task 2",
    description: "Description for Task 2",
    status: "Completed",
  },
  {
    id: 3,
    name: "Kaif",
    title: "Task 3",
    description: "Description for Task 3",
    status: "Ongoing",
  },
];

export default function Tasks() {
  const getStatusColor = (status) => {
    return status === "Completed" ? "#17c864" : "#d03369";
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
          >
           
          </div>
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
            >
              Add
              <IoIosAddCircle  style={{marginLeft:'15px'}}/>
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
                <StyledTableCell>{task.name}</StyledTableCell>
                <StyledTableCell>
                  <Avatar
                    alt={task.name}
                    src="https://mui.com/static/images/avatar/1.jpg"
                    sx={{ width: 24, height: 24 }}
                  />
                </StyledTableCell>
                <StyledTableCell>{task.title}</StyledTableCell>
                <StyledTableCell>{task.description}</StyledTableCell>
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
                    {task.status}
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
