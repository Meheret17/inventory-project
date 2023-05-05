const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const connectDB = require('./utlis/db')

connectDB()

app.use(express.static("static"));
app.use(cors());
app.use(express.json());

// Your routes will go here
const mainRouter = require('./route/mainRouter')
app.use('/api', mainRouter)


app.get("/status", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = app;
