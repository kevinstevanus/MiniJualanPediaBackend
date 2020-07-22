const fs = require("fs");
const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
  if (url === "/") {
    console.log("you are on t");
  } else if (url === "/message" && method === "POST") {
    console.log('you are on messages')
  }
};
module.exports = requestHandler;
