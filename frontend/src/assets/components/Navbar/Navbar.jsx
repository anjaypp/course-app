import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Navbar.css';

export default function ButtonAppBar() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();


  if (!token) return null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='navbar'>
        <Toolbar>
          <Typography variant="h6" component="div" className='text' sx={{ flexGrow: 1 }}>
            CourseCentral
          </Typography>

          <Button className='nav-button' component={Link} to="/home">
            Courses
          </Button>
      
          <Button className='nav-button' component={Link} to="/add">
            Add Courses
          </Button>

          <Button className='nav-button' onClick={handleLogout}>
            Logout 
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
