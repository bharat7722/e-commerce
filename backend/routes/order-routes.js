const express = require("express");
const { authGuard, isAdmin } = require("../middleware/auth-middleware");
const router = express.Router();
const {
  userOrderController,
  getAllOrderController,
  deleteOrderController,
  getAllAdminOrdersController,
  deliveredAdminOrderController,
} = require("../controller/order-controller");
router
  .route("/")
  .post(userOrderController)
  .get(authGuard, getAllOrderController)
  .delete(deleteOrderController);
// http://localhost:5000/api/orders/admin-orders =>below api
router
  .route("/admin-orders")
  .get(authGuard, isAdmin, getAllAdminOrdersController);
router
  .route("/delivered-order/:id")
  .put(authGuard, isAdmin, deliveredAdminOrderController);

module.exports = router;
