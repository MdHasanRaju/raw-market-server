const mongoose = require("mongoose");
const { Schema } = mongoose;

const FruitsSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is not provided"],
  },
  image: {
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

const FruitsModel = mongoose.model("FruitsModel", FruitsSchema);
module.exports = FruitsModel;
