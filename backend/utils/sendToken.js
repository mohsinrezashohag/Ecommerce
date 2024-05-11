const jwt = require("jsonwebtoken");

module.exports.sendToken = (user, statusCode, res) => {


  const token = jwt.sign({ id: user?._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  const data = { token, id: user._id, };

  return res.status(statusCode).cookie("token", data, options).json({
    success: true,
    user,
    token,
  });
};
