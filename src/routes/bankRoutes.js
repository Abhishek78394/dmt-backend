const express = require('express');
const { verifyBank } = require('../controllers/bankController');
const router = express.Router();

router.post('/verify-bank', verifyBank);

module.exports = router;
