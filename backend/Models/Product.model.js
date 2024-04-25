const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  image: { type: String },
  price: { type: Number },
});

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = {
  ProductModel,
};
