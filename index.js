require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const errorHandler = require('./src/middleware/errorHandler');

const authRoutes = require('./src/routes/authRoutes');
const verificationRoutes = require('./src/routes/verificationRoutes');
const panRoutes = require('./src/routes/panRoutes');
const aadhaarRoutes = require('./src/routes/aadhaarRoutes');
const addressRoutes = require('./src/routes/addressRoutes');
const bankRoutes = require('./src/routes/bankRoutes');

const app = express();

app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/verify', verificationRoutes);
app.use('/api/pan', panRoutes);
app.use('/api/aadhaar', aadhaarRoutes);
app.use('/api/address', addressRoutes);
app.use('/api/bank', bankRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
