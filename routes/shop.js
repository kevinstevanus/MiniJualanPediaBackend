const express = require("express");

const router = express.Router();

const app = express();

router.get("/", (req, res, next) => {
  console.log("at root");
  res.send("<h1> test </h1>");
});

module.exports = router;
