"use client"
import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, TablePagination, IconButton, Typography, Divider } from '@mui/material';
import { GridOn as GridIcon } from '@mui/icons-material';

// Dummy data for demonstration
const dummyData = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', dateOfJoining: '2022-01-01', imageUrl: '' },
  { id: 2, firstName: 'Geetha', lastName: 'Krishna', email: 'gee.kri@example.com', dateOfJoining: '2022-02-01', imageUrl: null },
  { id: 3, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', dateOfJoining: '2022-02-01', imageUrl: null },
  { id: 4, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', dateOfJoining: '2022-02-01', imageUrl: null },
  { id: 5, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', dateOfJoining: '2022-02-01', imageUrl: null },
  // Add more dummy data as needed
];

function Home() {
  // Pagination state
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Change page handler
  const handleChangePage = (event: any, newPage: React.SetStateAction<number>) => {
    setPage(newPage);
  };

  // Change rows per page handler
  const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div style={{ marginTop: "150px", padding: "0 20px", marginBottom: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Employee 
      </Typography>
      <Divider />
      <IconButton style={{ position: 'absolute', top: 10, right: 0 }}>
        <GridIcon />
      </IconButton>
      <TableContainer component={Paper} style={{ padding: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: '#F08000', height: '30px' }}>Image</TableCell>
              <TableCell style={{ backgroundColor: '#F08000', height: '30px' }}>Last Name</TableCell>
              <TableCell style={{ backgroundColor: '#F08000', height: '30px' }}>First Name</TableCell>
              <TableCell style={{ backgroundColor: '#F08000', height: '30px' }}>Email ID</TableCell>
              <TableCell style={{ backgroundColor: '#F08000', height: '30px' }}>Date of Joining</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  {row.imageUrl ? (
                    <Avatar alt={`${row.firstName} ${row.lastName}`} src={row.imageUrl} />
                  ) : (
                    <Avatar>{`${row.firstName.charAt(0)}${row.lastName.charAt(0)}`}</Avatar>
                  )}
                </TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.dateOfJoining}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={dummyData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default Home;
