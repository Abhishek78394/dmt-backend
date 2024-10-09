const express = require('express');
const { verifyOtp } = require('../controllers/verificationController');
const router = express.Router();

router.post('/verify-otp', verifyOtp);

module.exports = router;
