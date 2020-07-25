const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const db = require("./util/database");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");
const test = require("./models/product");
const dummyRoutes = require("./routes/dummyroutes");
// db.query("SELECT * FROM USERS")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

test
  .fetchAll()
  .then((result) => {
    console.log(result.rows[1]);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(dummyRoutes);
app.use("/admin", adminRoutes);
app.use(userRoutes);
app.use((req, res, next) => {
  res.status(404).send("<h1>page not found</h1>");
});

app.listen(3000);
