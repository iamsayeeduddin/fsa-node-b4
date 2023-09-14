const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model("products", productSchema);
