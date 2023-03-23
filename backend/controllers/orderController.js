const catchAsyncError = require("../middleware/catchAsyncError");
const Order = require("../model/orderModel");
const Product = require("../model/productModel");
const ErrorHandler = require("../utils/ErrorHandler");

// * Create New Order
exports.newOrder = catchAsyncError(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  const order = Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt:Date.now(),
    user:req.user._id
  });
  res.status(200).json({
    success:true,
    order
  })
});
