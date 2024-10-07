const mongoose = require('mongoose');

const aadhaarSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  aadhaar_number: {
    type: String,
    required: true,
    unique: true,
  },
  is_verified: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Aadhaar', aadhaarSchema);
