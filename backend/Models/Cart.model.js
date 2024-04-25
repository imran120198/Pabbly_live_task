const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  image: { type: String },
  price: { type: Number },
});

const CartModel = mongoose.model("cart", CartSchema);

module.exports = {
  CartModel,
};
