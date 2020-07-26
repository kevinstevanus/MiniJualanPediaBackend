const express = require("express");
const modelDelete = require("../models/todelete");
const router = express.Router();
const test = require("../controllers/test");
const app = express();

router.get("/test", test.testController);

module.exports = router;
