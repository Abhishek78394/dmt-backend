const express = require('express');
const { verifyPan } = require('../controllers/panController');
const { panValidation } = require('../middleware/validate');
const router = express.Router();

router.post('/verify-pan', panValidation, verifyPan);

module.exports = router;
