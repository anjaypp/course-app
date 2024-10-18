import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css'; // Import the CSS file

const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    userPassword: ""
  });
  const navigate = useNavigate();

  const updateUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const sendData = () => {
    axios.post("http://localhost:4000/user/login", user)
      .then((res) => {
        if (res.data.message === "Login Successful") {
          localStorage.setItem("token", res.data.usertoken);
          // Navigate to home
          navigate("/home");
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  };

  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"  
    >
      
      <div className="login-container">
      <h1>Login</h1>
        <TextField
          required
          id="outlined-required"
          label="Username"
          name="userName"
          value={user.userName}
          onChange={updateUser}
        />
        
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="userPassword"
          value={user.userPassword}
          onChange={updateUser}
        />

        <Button 
          variant="contained" 
          color="success" 
          onClick={sendData} 
          className="login-button" // Add class for custom styling
        >
          Login
        </Button>
      </div>
    </Box>
  );
};

export default Login;
