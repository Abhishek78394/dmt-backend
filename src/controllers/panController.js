const PAN = require('../models/PAN');

exports.verifyPan = async (req, res, next) => {
  try {
    const { panNumber, userId } = req.body;

    const panDetails = {
      name: 'John Doe',
      fatherName: 'Robert Doe',
      dob: '1990-01-01'
    };

    const panRecord = new PAN({
      userId,
      panNumber,
      name: panDetails.name,
      fatherName: panDetails.fatherName,
      dob: panDetails.dob
    });

    await panRecord.save();

    res.status(200).json({ success: true, data: panRecord });
  } catch (error) {
    next(error);
  }
};
