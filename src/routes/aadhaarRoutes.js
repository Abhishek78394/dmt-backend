const express = require('express');
const { verifyAadhaar } = require('../controllers/aadhaarController');
const router = express.Router();

router.post('/verify-aadhaar', verifyAadhaar);

module.exports = router;
