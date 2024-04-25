const { Router } = require("express");
const { CartModel } = require("../Models/Cart.model");

const CartRoute = Router();

//1. Get Data

CartRoute.get("/", async (req, res) => {
  try {
    const cart = await CartModel.find();
    res.send(cart);
  } catch (err) {
    res.send(err);
  }
});

//2. Post Data
CartRoute.post("/", async (req, res) => {
  try {
    const newCart = new CartModel(req.body);
    await newCart.save();
    res.status(201).send({ message: "New Cart Added", cart: newCart });
  } catch (err) {
    console.error("Error adding cart:", err);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

module.exports = {
  CartRoute,
};
