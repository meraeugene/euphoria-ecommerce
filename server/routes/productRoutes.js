const express = require("express");
const router = express.Router();

const {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productControllers");

router.get("/", getProducts);

router.post("/create", createProduct);

router.get("/:id", getProduct);

router.delete("/:id", deleteProduct);

router.patch("/:id", updateProduct);

module.exports = router;
