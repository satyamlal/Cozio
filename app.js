const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("Everything is working fine!");
});

app.listen(3000, () => {
  console.log("Server is listening to port 3000.");
});
