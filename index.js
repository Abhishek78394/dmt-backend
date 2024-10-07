require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const { PORT = 8259, SESSION_SECRET = 'SESSION_SECRET@123' } = process.env;

const app = express();

// Start the server
app.listen(PORT, async (error) => {
  if (error) {
    console.error('Error starting the server:', error);
  } else {
    try {
      await connectDB();
      console.info(`Server is running on port ${PORT}`);
    } catch (dbError) {
      console.error('Error connecting to the database:', dbError);
    }
  }
});
