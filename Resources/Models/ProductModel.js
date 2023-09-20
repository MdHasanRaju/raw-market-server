const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is not provided"],
  },
  photoUrl: {
    type: String,
    required: true,
  },
  prevPrice: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const ProductModel = mongoose.model("ProductModel", productSchema);
module.exports = ProductModel;
