const Address = require('../models/Address');

exports.addAddress = async (req, res, next) => {
  try {
    const { userId, currentAddress, communicationAddress } = req.body;

    const address = new Address({
      userId,
      currentAddress,
      communicationAddress
    });

    await address.save();

    res.status(201).json({ success: true, data: address });
  } catch (error) {
    next(error);
  }
};
