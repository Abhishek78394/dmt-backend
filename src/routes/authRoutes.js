const express = require('express');
const { signup, login } = require('../controllers/authController');
const { signupValidation } = require('../middleware/validate');
const router = express.Router();

router.post('/signup', signupValidation, signup);
router.post('/login', login);

module.exports = router;
