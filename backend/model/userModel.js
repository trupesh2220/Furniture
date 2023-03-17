const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    mexLength: [30, "Name can not exceed thirty character"],
    minLength: [4, "Enter Your Full Name"],
  },
  email: {
    type: String,
    required: [true, "Enter Email Id"],
    unique: true,
    validate: [validator.isEmail, "Please Enter Valid Email Id"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Enter Long Password"],
    select: false,
  },
  avatar: {
    public_id: { type: String, required: true },
    url: { type: String, required: true },
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpired: Date,
});
module.exports = mongoose.model("user", userSchema);
