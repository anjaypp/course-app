import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function ButtonAppBar() {
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

        </Toolbar>
      </AppBar>
    </Box>
  );
}
