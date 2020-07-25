const express = require("express");
const modelDelete = require("../models/todelete");
const router = express.Router();

const app = express();

router.get("/test", (req, res, next) => {
  console.log("kek");
});

module.exports = router;
