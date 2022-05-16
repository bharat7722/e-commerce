const express = require("express");
const router = express.Router();
const { userProfile, userAddress } = require("../controller/user-controller");
const { authGuard } = require("../middleware/auth-middleware");
router.route("/profile").get(authGuard, userProfile);
router.route("/address").post(authGuard, userAddress);
module.exports = router;
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThmYmM3MThkZjI5YWNiZTMyODk2NSIsImlhdCI6MTY0NDg5Njc4MX0.ZGPsC7Y46-5eT7H3Ba8YEoI6VWl4GPYmleQPcQEtWDQ
