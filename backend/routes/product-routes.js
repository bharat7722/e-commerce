const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  addProduct,
} = require("../controller/product");
const { authGuard } = require("../middleware/auth-middleware");
const { upload } = require("../middleware/upload");
router
  .route("/")
  .get(getAllProducts)
  .post(authGuard, upload.single("image"), addProduct);
router
  .route("/:id")
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
