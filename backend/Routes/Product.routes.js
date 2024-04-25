const { Router } = require("express");
const { ProductModel } = require("../Models/Product.model");

const ProductRoute = Router();

//1. Get Data

ProductRoute.get("/", async (req, res) => {
  try {
    const product = await ProductModel.find();
    res.send(product);
  } catch (err) {
    res.send(err);
  }
});

//2. Post Data
ProductRoute.post("/create", async (req, res) => {
  try {
    const newProduct = new ProductModel({ ...req.body });
    await newProduct.save();
    res.send("New Product Added");
  } catch (err) {
    res.send(err);
  }
});

module.exports = {
  ProductRoute,
};
