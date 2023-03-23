const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../model/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

//  * common register user
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: { public_id: "this is Public id", url: "ProfileUrl" },
  });
  sendToken(user, 201, res);
});

//  * common logout user
exports.logout = catchAsyncError(async (req, res, next) => {
  console.log(res.cookie("token"));
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: "true",
    message: "logout success full",
  });
});

//  * common login user
exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("please enter email and password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email and password", 401));
  }
  const isPasswordMatched = user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email and password", 401));
  }
  sendToken(user, 200, res);
});

//  * common forgot password
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new ErrorHandler("please login", 404));
  }
  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });
  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;
  const message = `Your Password Reset Token is : -\n\n ${resetPasswordUrl}\n\n If You Are not requested then ignore it`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Ecommerce",
      message,
    });
    res.status(200).json({
      success: "true",
      message: "email send successful",
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpired = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message, 500));
  }
});

//  * common reset password
exports.resetPassword = catchAsyncError(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpired: { $gt: Date.now() },
  });

  if (!user) {
    return next(new ErrorHandler("Reset is invalid or expire", 404));
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password is dose not match try again"));
  }
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpired = undefined;

  await user.save();
  sendToken(user, 200, res);
});

//  * common get user details
exports.getUserDetails = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    status: "success",
    user,
  });
});

//  * common updatePassword
// todo task pending 
exports.updatePassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("password does not match", 400));
  }

  user.password = req.body.newPassword;

  await user.save();

  sendToken(user, 200, res);
});

//  * common updateProfile
exports.updateProfile = catchAsyncError(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: "true",
  });
});

//  * common getAllUser
exports.getAllUser = catchAsyncError(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "true",
    users,
  });
});

//  * common grtSingleUser
exports.getSingleUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new ErrorHandler("user is not exist ", 404));
  }
  res.status(200).json({
    status: "true",
    user,
  });
});

//  * admin updateUserRole
exports.updateUserRole = catchAsyncError(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: "true",
  });
});

//  * admin deleteUser
exports.deleteUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`user does not exist with id:${req.params.id}`)
    );
  }
  // await user.remove();

  res.status(200).json({
    success: "true",
  });
});
