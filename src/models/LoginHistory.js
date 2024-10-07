const mongoose = require('mongoose');

const loginHistorySchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  login_method: {
    type: String,
    enum: ['email', 'mobile', 'account_number'],
    required: true,
  },
  ip_address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['success', 'failure'],
    required: true,
  },
  login_time: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('LoginHistory', loginHistorySchema);
