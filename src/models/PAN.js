const mongoose = require('mongoose');

const panSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  pan_number: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
  },
  is_verified: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  father_name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('PAN', panSchema);
