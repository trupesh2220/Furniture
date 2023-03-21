const { JsonWebTokenError, TokenExpiredError } = require("jsonwebtoken");
const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err,req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // todo mongoes duplicate key error

  if (err.code === 11000) {
    const  message =`Duplicate ${Object.keys(err.keyValue)} entered`
  }

  if (err.name === "JsonWebTokenError") {
    const  message =`json web token is invalid try again`
    
  }
  if (err.name === "TokenExpiredError") {
    const  message =`json web token is expire try again`

  }
  res.status(err.statusCode).json({
    success: "false",
    message: err.message,
  });
};
