const Aadhaar = require('../models/Aadhaar');

exports.verifyAadhaar = async (req, res, next) => {
  try {
    const { aadhaarNumber, otp } = req.body;

    const isOtpValid = otp === '123456';  

    if (!isOtpValid) {
      return res.status(400).json({ success: false, message: 'Invalid OTP' });
    }

    const aadhaarRecord = new Aadhaar({
      aadhaarNumber,
      verified: true
    });

    await aadhaarRecord.save();

    res.status(200).json({ success: true, message: 'Aadhaar Verified', data: aadhaarRecord });
  } catch (error) {
    next(error);
  }
};
