const express = require("express");
const router = express.Router();
const productController = require("../controllers/products");

router.get("/products", productController.getAddProduct);

router.post("/add-products", (req, res, next) => {
  console.log("POST PRODUCTS");
});

module.exports = router;
