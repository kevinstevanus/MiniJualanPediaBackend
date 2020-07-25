const db = require("../util/database");

module.exports = class todelete {
  hellothere() {
    const json = '{"result":true, "count":42}';
    const obj = JSON.parse(json);

    return obj;
  }
};
