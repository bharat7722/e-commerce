const user = require("../model/user-model");
const jwt = require("jsonwebtoken");
const address = require("../model/user-address-model");
exports.userProfile = async (req, res) => {
  try {
    const userId = await jwt.verify(
      req.headers.authorization,
      process.env.JSON_SECRET_KEY
    );
    console.log(userId.id);
    const result = await user.findById(userId.id);
    const addr = await address.findOne({
      userId: result._id,
    });
    res.status(200).json({
      success: true,
      message: "all user",
      result: {
        id: result._id,
        name: result.name,
        email: result.email,
        isAdmin: result.isAdmin,
        address: addr,
      },
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};
exports.userAddress = async (req, res) => {
  try {
    const { houseNo, street, pin, city } = req.body;
    const userIdData = await jwt.verify(
      req.headers.authorization,
      process.env.JSON_SECRET_KEY
    );
    const userId = userIdData.id;
    const result = await address.create({
      houseNo,
      street,
      pin,
      city,
      userId,
    });
    res.status(200).json({
      success: true,
      message: "address added",
      result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};
