const mongoose = require("mongoose");
const { Schema } = mongoose;

const FruitSchema = new Schema({
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

const FruitModel = mongoose.model("FruitModel", FruitSchema);
module.exports = FruitModel;
