const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(userRoutes);

app.listen(3000);
