const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controllers/productController");
const { isAuthenticatedUser, authoriZeRole } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(getAllProduct);
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authoriZeRole("admin"), createProduct);
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authoriZeRole("admin"), updateProduct)
  .delete(isAuthenticatedUser, authoriZeRole("admin"), deleteProduct)

router.route("product/:id").get(getSingleProduct);
module.exports = router;
