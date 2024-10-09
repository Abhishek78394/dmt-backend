const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');

exports.signup = async (req, res, next) => {
  try {
    const { email, mobile, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return next(new ErrorResponse('User already exists with this email.', 400));
    }

    user = new User({ email, mobile, password });
    await user.save();

    res.status(201).json({ success: true, message: 'User registered successfully.' });
  } catch (error) {
    console.log(error)
    next(new ErrorResponse('Signup failed.', 500));
  }
};

exports.login = async (req, res, next) => {
  try {
    const { emailOrMobileOrAccount, password } = req.body;

    let user = await User.findOne({
      $or: [{ email: emailOrMobileOrAccount }, { mobile: emailOrMobileOrAccount }, { account_number: emailOrMobileOrAccount }]
    });

    if (!user) {
      return next(new ErrorResponse('User not found.', 404));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(new ErrorResponse('Invalid credentials.', 401));
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ success: true, token });
  } catch (error) {
    console.log(error)
    next(new ErrorResponse('Login failed.', 500));
  }
};
