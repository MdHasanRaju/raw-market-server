const FruitModel = require("../Models/FruitModel");

// post method for creating a single Fruit
exports.createNewFruit = async (req, res) => {
  try {
    const title = req.body.title;
    const photoUrl = req.body.photoUrl;
    const prevPrice = req.body.prevPrice;
    const price = req.body.price;
    const ratings = req.body.ratings;
    const description = req.body.description;
    const fruit = {
      title,
      price,
      prevPrice,
      photoUrl,
      ratings,
      description,
    };
    const newFruits = await FruitModel.create(fruit);
    res.json({
      message: "New fruit created successfully",
      newFruits,
    });
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// get method for fetching all Fruits
exports.getAllFruits = async (req, res) => {
  try {
    const fruits = await FruitModel.find({});
    res.status(200).json({
      message: "All fruits found successfully",
      fruits,
    });
  } catch (error) {
    res.status(404).json({ error });
  }
};
