"use client";
import React, { useEffect, useState } from "react";
import { Typography, Avatar, Paper, Box, CircularProgress } from "@mui/material";
import { useParams } from "next/navigation"; // Import useParams from next/navigation

// Dummy data for demonstration
interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfJoining: string;
  imageUrl: string | null;
  avgRating: number;
}

const dummyData: Employee[] = [
  { id: 1, firstName: 'Mohana', lastName: 'Krishna', email: 'john.doe@example.com', dateOfJoining: '2022-01-01', imageUrl: '/01.jpg', avgRating: 5 },
  { id: 2, firstName: 'Narayana', lastName: 'Akkili', email: 'gee.kri@example.com', dateOfJoining: '2022-02-01', imageUrl: '/02.jpg', avgRating: 4.5 },
  { id: 3, firstName: 'Madhu', lastName: 'RK', email: 'jane.smith@example.com', dateOfJoining: '2022-02-01', imageUrl: null, avgRating: 3 },
  { id: 4, firstName: 'Ravi', lastName: 'RK', email: 'jane.smith@example.com', dateOfJoining: '2022-02-01', imageUrl: null, avgRating: 2 },
  { id: 5, firstName: 'Syam', lastName: 'Turi', email: 'jane.smith@example.com', dateOfJoining: '2022-02-01', imageUrl: null, avgRating: 1.5 },
  { id: 6, firstName: 'Sharan', lastName: 'Teja', email: 'jane.smith@example.com', dateOfJoining: '2022-02-01', imageUrl: null, avgRating: 0 }
  // Add more dummy data as needed
];

function EmployeeDetails() {
  const { id } = useParams(); // Use useParams to get the dynamic id

  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    if (id) {
      const employeeId = Array.isArray(id) ? id[0] : id;
      const foundEmployee = dummyData.find(emp => emp.id === parseInt(employeeId, 10));
      setEmployee(foundEmployee || null);
    }
  }, [id]);

  if (!id) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!employee) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="error">
          Employee not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box display="flex" justifyContent="left" alignItems="center" height="85vh"  sx={{ paddingLeft: '20px'}}>
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', textAlign: 'center' }}>
        <Avatar
          alt={`${employee.firstName} ${employee.lastName}`}
          src={employee.imageUrl || ""}
          style={{ width: '100px', height: '100px', margin: '0 auto 20px' }}
        />
        <Typography variant="h5" gutterBottom>
          {employee.firstName} {employee.lastName}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: {employee.email}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Date of Joining: {employee.dateOfJoining}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Average Rating: {employee.avgRating}
        </Typography>
      </Paper>
    </Box>
  );
}

export default EmployeeDetails;
