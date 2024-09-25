const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// database
const connectDB = require("./connectdb");

// Middleware for JSON parsing
app.use(express.json());

// Routes
const movieRoutes = require('./routes/movie');


app.use('/api/movies', movieRoutes);

const port = process.env.PORT || 3000;

// Start server
const start = async () => {
    try {
      // connectDB
      await connectDB(process.env.MONGO_URI);
      app.listen(port, console.log(`Server is listening at port ${port}...`));
    } catch (error) {
      console.log(error);
    }
  };
  
  start();
