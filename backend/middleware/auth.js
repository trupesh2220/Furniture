const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please login", 401));
  }

  const decodedDate = jwt.verify(token, "abc");
  req.user = await User.findById(decodedDate.id);
  next();
});

exports.authoriZeRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new ErrorHandler(`this user is not access this resources`, 403))
    }
    next();
  };
};
