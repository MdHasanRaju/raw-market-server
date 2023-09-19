const FruitsModel = require("../Models/VegetablesModel");

// post method for creating a single Fruit
exports.createNewFruits = async (req, res) => {
  try {
    const title = req.body.title;
    const image = req.body.image;
    const prevPrice = req.body.prevPrice;
    const price = req.body.price;
    const ratings = req.body.ratings;
    const description = req.body.description;
    const fruits = {
      title,
      price,
      prevPrice,
      image,
      ratings,
      description,
    };
    const newFruits = await FruitsModel.create(fruits);
    res.json({
      message: "New vegetables created successfully",
      newVegetables,
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
    const fruits = await FruitsModel.find({});
    res.status(200).json({
      message: "All fruits found successfully",
      fruits,
    });
  } catch (error) {
    res.status(404).json({ error });
  }
};
