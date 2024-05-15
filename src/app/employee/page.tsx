"use client"
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, TablePagination, IconButton, Typography, Divider } from '@mui/material';
import { GridOn as GridIcon, ViewCompact as ViewCompactIcon } from '@mui/icons-material';
import TocIcon from '@mui/icons-material/Toc';
import Rating from '@mui/material/Rating'; // Import the Rating component
import Link from "next/link";

// Dummy data for demonstration
const dummyData = [
  { id: 1, firstName: 'Mohana', lastName: 'Krishna', email: 'john.doe@example.com', dateOfJoining: '2022-01-01', imageUrl: '/01.jpg', avgRating: 5 },
  { id: 2, firstName: 'Narayana', lastName: 'Akkili', email: 'gee.kri@example.com', dateOfJoining: '2022-02-01', imageUrl: '/02.jpg', avgRating: 4.5 },
  { id: 3, firstName: 'Madhu', lastName: 'RK', email: 'jane.smith@example.com', dateOfJoining: '2022-02-01', imageUrl: null, avgRating: 3 },
  { id: 4, firstName: 'Ravi', lastName: 'RK', email: 'jane.smith@example.com', dateOfJoining: '2022-02-01', imageUrl: null, avgRating: 2 },
  { id: 5, firstName: 'Syam', lastName: 'Turi', email: 'jane.smith@example.com', dateOfJoining: '2022-02-01', imageUrl: null, avgRating: 1.5 },
  { id: 6, firstName: 'Sharan', lastName: 'Teja', email: 'jane.smith@example.com', dateOfJoining: '2022-02-01', imageUrl: null, avgRating: 0 }
  // Add more dummy data as needed
];

function Home() {
  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [gridView, setGridView] = useState(false); // State to toggle between table and grid view

  // Change page handler
  const handleChangePage = (event: any, newPage: React.SetStateAction<number>) => {
    setPage(newPage);
  };

  // Change rows per page handler
  const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Toggle between table and grid view
  const toggleView = () => {
    setGridView(!gridView);
  };

   function toEmployeeDetails(){
    console.log("-----EmployeeDetails---")
  }
  return (
    <div style={{ marginTop: "150px", padding: "0 20px", marginBottom: "20px", position: 'relative' }}>
      <Typography variant="h4" gutterBottom>
        Employee
      </Typography>
      <Divider />
      <IconButton style={{ position: 'absolute', top: 10, right: '1%', }}>
        {!gridView && <ViewCompactIcon onClick={toggleView} fontSize="large" />}
        {gridView && <TocIcon onClick={toggleView} fontSize="large" />}
      </IconButton>
      {gridView ? (
        // Grid view
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {dummyData.map((employee) => (
            <div key={employee.id} style={{ position: 'relative' }}>
              {employee.imageUrl ? (
                <Avatar alt={`${employee.firstName} ${employee.lastName}`}
                  src={employee.imageUrl}
                  style={{ cursor: 'pointer', marginTop: "20px" }}
                  title={`${employee.firstName} ${employee.lastName}`} />
              ) : (
                <Avatar style={{ cursor: 'pointer', marginTop: "20px" }}
                  title={`${employee.firstName} ${employee.lastName}`} >{`${employee.firstName.charAt(0)}${employee.lastName.charAt(0)}`}</Avatar>
              )}
              <Typography
                variant="body2"
                style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', width: '100%', textAlign: 'center' }}
              >
              </Typography>
            </div>

          ))}
        </div>
      ) : (
        // Table view
        <TableContainer component={Paper} style={{ padding: "20px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ backgroundColor: '#FFD580', height: '30px' }}>Image</TableCell>
                <TableCell style={{ backgroundColor: '#FFD580', height: '30px' }}>Last Name</TableCell>
                <TableCell style={{ backgroundColor: '#FFD580', height: '30px' }}>First Name</TableCell>
                <TableCell style={{ backgroundColor: '#FFD580', height: '30px' }}>Email ID</TableCell>
                <TableCell style={{ backgroundColor: '#FFD580', height: '30px' }}>Date of Joining</TableCell>
                <TableCell style={{ backgroundColor: '#FFD580', height: '30px' }}>Average Rating</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    {row.imageUrl ? (
                      <Avatar alt={`${row.firstName} ${row.lastName}`} src={row.imageUrl} sizes="large" />
                    ) : (
                      <Avatar sizes="large">{`${row.firstName.charAt(0)}${row.lastName.charAt(0)}`}</Avatar>
                    )}
                  </TableCell>
                  <TableCell style={{ color: 'blue',cursor:"pointer" }} onClick={toEmployeeDetails}> 
                      {row.lastName}  
                  </TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.dateOfJoining}</TableCell>
                  <TableCell>
                    <Rating name="half-rating-read" value={row.avgRating} readOnly precision={0.5} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={dummyData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      )}
    </div>
  );
}

export default Home;
