const express = require("express");
const cors = require("cors");
const jobRoutes = require('./routes/jobRoutes');

const app = express();
app.use(express.json());

// Use CORS middleware
app.use(cors());

// Define routes
app.use('/api/jobs', jobRoutes);

module.exports = app;
