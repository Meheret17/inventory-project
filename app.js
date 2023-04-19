const express = require("express");
const mongoose = require("mongoose");
const { DB_URI } = require("./config");
const Product = require("./models/product");
const User = require("./models/user");
const cors = require("cors");
const app = express();

mongoose
  .connect(DB_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("Error:", err.message));

app.use(express.static("static"));
app.use(cors());
app.use(express.json());

// Your routes will go here

app
  .get("/api/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
  })
  .get("/api/products/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) res.json(product);
    else res.status(404).json({ error: "product not found" });
  })
  .post("/api/products", async (req, res) => {
    const obj = new Product(req.body);
    const product = await obj.save();
    res.status(201).json(product);
  })
  .put("/api/products/:id", async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (product) res.json(product);
    else res.status(404).json({ error: "product not found" });
  })
  .delete("/api/products/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).end();
  })
  .post("/api/users", async (req, res) => {
    const obj = new User(req.body);
    const user = await obj.save();
    res.status(201).json(user);
  })
  .get("/api/users/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) res.json(user);
    else res.status(404).json({ error: "user not found" });
  });

app.get("/status", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = app;
