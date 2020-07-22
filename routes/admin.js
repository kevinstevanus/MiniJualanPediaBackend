const express = require("express");
const router = express.Router();

router.get("/products", (req, res, next) => {
  console.log("get products");
});

router.post("/add-products", (req, res, next) => {
  console.log("POST PRODUCTS");
});

module.exports = router;
