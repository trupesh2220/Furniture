const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

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

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password =await bcrypt.hash(this.password, 10);
});

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, "abc", { expiresIn: "5h" });
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpired = Date.now() + 15 * 60 * 60 * 1000;
  return resetToken
};

module.exports = mongoose.model("user", userSchema);
