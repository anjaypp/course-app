const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

// Initializing CORS middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the methods you want to allow
  credentials: true // Allow credentials if necessary
}));

app.use(express.json()); // Parse JSON bodies

const courseRoutes = require("./routes/courseRoutes");
app.use("/api", courseRoutes);

require("./db/connection");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
