const jwt = require("jsonwebtoken");
const User = require("../model/user-model");
exports.authGuard = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(404).json({
        success: false,
        message: "no token provided",
      });
    }
    await jwt.verify(token, process.env.JSON_SECRET_KEY);
    next();
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "invalid token" + error,
    });
  }
};
exports.isAdmin = async (req, res, next) => {
  const token = req.headers.authorization;
  const userId = await jwt.verify(token, process.env.JSON_SECRET_KEY);
  const { isAdmin } = await User.findById(userId.id).select("isAdmin");

  if (isAdmin) {
    next();
  } else {
    res.status(401).json({
      success: false,
      message: "unauthorized user. you are not admin",
    });
  }
};
