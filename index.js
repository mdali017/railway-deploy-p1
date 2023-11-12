const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(cors());

// root
app.get("/", (req, res) => {
  res.send("Welcome to the server.");
});

// testing
app.get("/coffee", (req, res) => {
  res.send("All coffee is here...");
});

// testing
app.get("/all-product", (req, res) => {
  res.send("All Product is here...");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port : ${port}`);
});
