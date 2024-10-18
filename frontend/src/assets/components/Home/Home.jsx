import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CircularProgress
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch courses from your API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/courses");
        setCourses(response.data);
      } catch (error) {
        setError("Error fetching courses. Please try again later.");
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:4000/api/delete/${_id}`);
      setCourses(courses.filter((course) => course._id !== _id)); // Update state without reload
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const handleEdit = (course) => {
    navigate("/add", { state: { course } });
  };

  if (loading) {
    return <CircularProgress />;
  }

  const token = localStorage.getItem('token');
  
  if (!token) return null;

  return (
    <div>
      <div className="hero-section">
        <h1>Explore Our Courses</h1>
        <p>Find the perfect course to boost your skills and career.</p>
        {error && <Typography color="error">{error}</Typography>}{" "}
        </div>
        {/* Display error message */}
        <div className="card-container">
          {courses.length === 0 ? (
            <Typography>No courses available.</Typography>
          ) : (
            courses.map((course) => (
              <Card key={course._id}>
                <CardMedia
                  component="img"
                  height="140"
                  image={
                    course.courseImage || "https://via.placeholder.com/150"
                  } // Fallback to placeholder
                  alt={course.courseName}
                />

                <CardContent>
                  <Typography variant="h5">{course.courseName}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.courseDescription}
                  </Typography>
                  <Typography className="data-rating">
                     Category:{course.courseCategory}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => handleEdit(course)}
                  >
                    Edit Course
                  </Button>
                  <Button
                    className="delete-btn"
                    onClick={() => handleDelete(course._id)}
                  >
                    Delete Course
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>
    </div>
  );
};

export default Home;
