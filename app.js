const express = require("express");
const app = express();

app.use(express.static("static"));

// Your routes will go here

app.get("/status", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = app;
