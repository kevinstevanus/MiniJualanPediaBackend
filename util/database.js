const Pool = require("pg-pool");
require("dotenv").config();

const pool = new Pool({
  database: process.env.DB_DRIVER,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;
