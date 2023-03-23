const express = require("express");
const { newOrder } = require("../controllers/orderController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();
router.route("/order/new").get( isAuthenticatedUser,newOrder)
module.exports = router;