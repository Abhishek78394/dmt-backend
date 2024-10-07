const mongoose = require('mongoose');

const verificationSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  verification_type: {
    type: String,
    enum: ['mobile', 'aadhaar'],
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  otp_expiry: {
    type: Date,
    required: true,
  },
  is_verified: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Verification', verificationSchema);
