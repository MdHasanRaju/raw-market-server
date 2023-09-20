const mongoose = require("mongoose");
const { Schema } = mongoose;

const vegetableSchema = new Schema({
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

const VegetableModel = mongoose.model("VegetableModel", vegetableSchema);
module.exports = VegetableModel;
