const mongoose = require("mongoose");
const { Schema } = mongoose;

const vegetablesSchema = new Schema({
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

const VegetablesModel = mongoose.model("VegetablesModel", vegetablesSchema);
module.exports = VegetablesModel;
