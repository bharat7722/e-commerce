const Login = require("../model/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await Login.findOne({ email });
    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "Invalid Email",
      });
    }
    const isPassword = await bcrypt.compare(password, userData.password);
    if (!isPassword) {
      return res.status(404).json({
        success: false,
        message: "Invalid Password",
      });
    }
    const token = await jwt.sign(
      { id: userData._id },
      process.env.JSON_SECRET_KEY
    );
    res.status(200).json({
      success: true,
      message: "user Found",
      result: userData.name,
      token,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: `Something wents worng ${error}`,
      result: null,
    });
  }
};
