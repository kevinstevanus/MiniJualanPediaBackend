const db = require("../util/database");

module.exports = class toDelete {
  hellothere() {
    db.query("INSERT INTO USERS(USERNAME) VALUES('kev')");
  }
};
