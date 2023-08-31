const Product = require("../models/productModel");
const mongoose = require("mongoose");

// get single product
const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json({ status: "success", data: products });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};

// create single product
const createProduct = async (req, res) => {
  const { name, description, price, category, stockQuantity } = req.body;

  try {
    console.log("Request Body Data:", {
      name,
      description,
      price,
      category,
      stockQuantity,
    });

    const product = new Product({
      name,
      description,
      price,
      category,
      stockQuantity,
    });

    await product.save();

    console.log("Product is created");
    res.status(200).json({ message: "Product is created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id " });
  }

  const product = await Product.findById(id);

  if (!product) {
    return res.status(400).json({ error: "No such product" });
  }

  res.status(200).json(product);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id " });
  }

  const product = await Product.findOneAndDelete({ _id: id });

  if (!product) {
    return res.status(400).json({ error: "No such product" });
  }

  res.status(200).json(product);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id " });
  }

  const product = await Product.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!product) {
    return res.status(400).json({ error: "No such product" });
  }

  res.status(200).json(product);
};

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};
