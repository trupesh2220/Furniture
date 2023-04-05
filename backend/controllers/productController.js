const catchAsyncError = require("../middleware/catchAsyncError");
const Product = require("../model/productModel");
const ApiFeature = require("../utils/ApiFeature");
const ErrorHandler = require("../utils/ErrorHandler");



// *  getAllProduct
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


// *  createProduct
exports.createProduct = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user.id;
  let product = await Product.create(req.body);
  res.status(200).json({ status: "success", product });
});

// *  updateProduct
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

// *  deleteProduct
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

// * getSingleProduct
exports.getSingleProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }
  res.status(200).json({ status: "success", product });
});

// * createProductReview
// todo task pending 
exports.createProductReview = catchAsyncError(async (req, res, next) => {
  const { rating, comment, productId } = req.body;
  const review = {
    user: req.body._id,
    name: req.body.name,
    rating: Number(rating),
    comment,
  };
  const product = await Product.findById(productId);
  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );
  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString()) {
        rev.rating = rating;
        rev.comment = comment;
      }
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }
  let avg = 0;
  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    status: "success",
  });
});

// * getAllReviews
// todo task pending 
exports.getAllReviews = catchAsyncError(async (req, res, next) => {
  const product = await product.findById(req.query.id);
  if (!product) {
    return next(new ErrorHandler("product not found ", 404));
  }
  res.status(200).json({
    success: "true",
    review: product.reviews,
  });
});

// * deleteProduct
// todo task pending 
exports.deleteReviews = catchAsyncError(async (req, res, next) => {
  const product = await product.findById(req.query.productId);
  if (!product) {
    return next(new ErrorHandler("product not found ", 404));
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() != req.query.id.toString()
  );

  let avg = 0;
  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  const ratings = avg / product.reviews.length;

  const numOfReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    reviews,
    ratings,
    numOfReviews,
    {
      new:true,
      runValidators:true,
      useFindAndModify:false
    }
  );

  res.status(200).json({
    success: "true",
  });
});