const express = require("express");
const mongoose = require("mongoose");
const { DB_URI } = require("./config");
const cors = require("cors");
const app = express();

// connect to MongoDB

app.use(express.static("static"));
app.use(cors());
app.use(express.json());

// Your routes will go here

app.get("/status", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = app;
