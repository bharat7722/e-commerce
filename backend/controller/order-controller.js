const Order = require("../model/order-modal");
const jwt = require("jsonwebtoken");

exports.userOrderController = async (req, res) => {
  try {
    const result = await Order.create(req.body);
    res.json({
      success: true,
      message: "user order placed",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "user order not placed" + error,
    });
  }
};
// protected route
exports.getAllOrderController = async (req, res) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    const userId = await jwt.verify(token, process.env.JSON_SECRET_KEY);
    console.log(userId.id);
    // populate cha use forign key chya related all data get karanya sathi use hoto
    const result = await Order.find({ userId: userId.id }).populate(
      "products.productId"
    );
    res.json({
      success: true,
      message: "user order placed",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "user order not placed" + error,
    });
  }
};
exports.getAllAdminOrdersController = async (req, res) => {
  try {
    const result = await Order.find()
      .sort({ createdAt: -1 })
      .populate("products.productId")
      .populate("userId");
    res.json({
      success: true,
      message: "user order placed",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "user order not placed" + error,
    });
  }
};

exports.deleteOrderController = async (req, res) => {
  try {
    const result = await Order.deleteMany();
    res.json({
      success: true,
      message: "Delete all orders",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
};
exports.deliveredAdminOrderController = async (req, res) => {
  const token = req.headers.authorization;
  console.log(token);
  console.log(req.params.id);
  console.log(req.body);

  try {
    const result = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json({
      success: true,
      message: "Order Delivered successfully",
      result,
    });
    console.log(result);
  } catch (error) {
    res.json({
      success: true,
      message: "Order Not Delivered" + error,
    });
  }
};
