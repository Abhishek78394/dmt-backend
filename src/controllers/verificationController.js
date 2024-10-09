const Verification = require('../models/Verification');
const User = require('../models/User');

exports.verifyOtp = async (req, res, next) => {
  try {
    const { otp, mobile } = req.body;
    const verification = await Verification.findOne({ otp, mobile });

    if (!verification) return res.status(400).json({ success: false, message: 'Invalid OTP' });

    verification.verified = true;
    await verification.save();

    await User.updateOne({ mobile }, { isVerified: true });

    res.status(200).json({ success: true, message: 'OTP Verified' });
  } catch (error) {
    next(error);
  }
};
