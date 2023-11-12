const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 4000;

// middleware
app.use(cors());

// testing
app.get("/", (req, res) => {
  res.send("Welcome to the server.");
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
