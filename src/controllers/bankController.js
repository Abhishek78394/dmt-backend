const Bank = require('../models/Bank');

exports.verifyBank = async (req, res, next) => {
  try {
    const { accountNumber, ifscCode, userId } = req.body;

    const bankDetails = {
      accountNumber,
      ifscCode,
      bankName: 'ABC Bank'
    };

    const bankRecord = new Bank({
      userId,
      accountNumber,
      ifscCode,
      bankName: bankDetails.bankName
    });

    await bankRecord.save();

    res.status(200).json({ success: true, data: bankRecord });
  } catch (error) {
    next(error);
  }
};
