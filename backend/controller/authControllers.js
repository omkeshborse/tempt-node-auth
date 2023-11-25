const userModel = require("../models/userSchema");
const emailValidator = require("email-validator");
const signup = async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;
  if (!name || !email || !password || !confirmpassword) {
    res.status(400).json({
      success: false,
      message: "Every field is required",
    });
  }
  const validEmail = emailValidator.validate(email);
  if (!validEmail) {
    res.status(400).json({
      success: false,
      message: "Please provide valid email ID",
    });
  }
  if (password !== confirmpassword) {
    res.status(400).json({
      success: false,
      message: "Password and Confirm Password Doesnot Match",
    });
  }
  try {
    const userInfo = userModel(req.body);

    const result = await userInfo.save();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Account is Already registered with provided email id",
      });
    }
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { signup };
