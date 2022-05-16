const jwt = require("jsonwebtoken");
const product = require("../model/product-model");
exports.getAllProducts = async (req, res) => {
  try {
    const result = await product.find();
    res.status(200).json({
      success: true,
      message: "Get all product data successfully",
      count: result.length,
      result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: `Unable to get All product data ${error}`,
      data: null,
    });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const result = await product.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Update product data successfully",
      count: result.length,
      result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: `Unable to Update Single product data ${error}`,
      data: null,
    });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const result = await product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Delete product data successfully",
      count: result.length,
      result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: `Unable to delete Single product data ${error}`,
      data: null,
    });
  }
};
exports.getSingleProduct = async (req, res) => {
  try {
    const result = await product.findOne({ _id: req.params.id });
    res.status(200).json({
      success: true,
      message: "get single product data successfully",
      count: result.length,
      result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: `Unable to get Single product data ${error}`,
      data: null,
    });
  }
};
exports.addProduct = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const userId = await jwt.verify(token, process.env.JSON_SECRET_KEY);
    req.body.userId = userId.id;
    console.log(userId.id);
    const result = await product.create(req.body);
    res.json({
      success: true,
      message: "product added",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "error" + error,
      result: null,
    });
  }
};
