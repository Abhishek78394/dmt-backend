const { check } = require('express-validator');

exports.signupValidation = [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password should be at least 6 characters').isLength({ min: 6 }),
  check('mobile', 'Please include a valid mobile number').isLength({ min: 10, max: 10 })
];

exports.panValidation = [
  check('panNumber', 'Please provide a valid PAN number').matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/)
];
