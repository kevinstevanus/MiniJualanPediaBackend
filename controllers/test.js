const testModel = require("../models/todelete");

exports.testController = async (req, res, next) => {
  const tes = new testModel();
  tes.hellothere();
};
