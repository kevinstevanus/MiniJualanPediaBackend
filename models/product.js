const db = require("../util/database");

module.exports = class Product {
  constructor(id, title, description, price, imageUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  save() {}

  static fetchAll() {
    return db.query("SELECT * FROM USERS");
  }

  static deleteById(id) {}

  static findById(id) {}
};
