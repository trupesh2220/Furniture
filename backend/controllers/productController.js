const catchAsyncError = require("../middleware/catchAsyncError");
const Product = require("../model/productModel");
const ApiFeature = require("../utils/ApiFeature");
const ErrorHandler = require("../utils/ErrorHandler");
exports.getAllProduct = catchAsyncError(async (req, res, next) => {
  const resultPerPage = 5;
  const productCount = await Product.countDocuments();
  const apiFeature = new ApiFeature(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  var product = await apiFeature.query;
  res.status(200).json({
    status: "success",
    product,
    productCount,
  });
});

exports.createProduct = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user.id;
  let product = await Product.create(req.body);
  res.status(200).json({ status: "success", product });
});

exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({ status: "success", product });
});

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }
  product = await Product.findByIdAndDelete(req.params.id);
  res
    .status(200)
    .json({ status: "success", message: "product delete successs full" });
});

exports.getSingleProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }
  res.status(200).json({ status: "success", product });
});
