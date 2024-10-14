import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import './Add.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // State to handle form data
  const [formData, setFormData] = useState({
    courseID: '',
    courseName: '',
    courseDescription: '',
    courseCategory: '',
    coursePrice: '',
    courseImage: '',
  });

  // Pre-fill form data if editing a course
  useEffect(() => {
    if (location.state && location.state.course) {
      setFormData(location.state.course);
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if we are editing a course or adding a new one
    if (location.state && location.state.course) {
      // Update the existing course
      axios
        .put(`http://localhost:4000/api/update/${location.state.course._id}`, formData)
        .then((res) => {
          alert('Data Updated');
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // Add a new course
      axios
        .post('http://localhost:4000/api/add', formData)
        .then((res) => {
          alert('Course added successfully');
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      {/* Form container */}
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 400,
          margin: 'auto',
          mt: 4,
        }}
        onSubmit={handleSubmit}
        className="container"
      >
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          {location.state ? 'Edit Course' : 'Add Course'}
        </Typography>

        <TextField
          label="Name"
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Category"
          name="courseCategory"
          type="text"
          value={formData.courseCategory}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Description"
          name="courseDescription"
          type="text"
          value={formData.courseDescription}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Image(URL)"
          name="courseImage"
          type="url"
          value={formData.courseImage}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Fees"
          name="coursePrice"
          type="number"
          value={formData.coursePrice}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
        />

        <Button type="submit" variant="contained" className="submit">
          {location.state ? 'Update Course' : 'Add Course'}
        </Button>
      </Box>
    </>
  );
};

export default Add;
