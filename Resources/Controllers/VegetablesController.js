const VegetablesModel = require("../Models/VegetablesModel");

// post method for creating a single vegetables item
exports.createNewVegetables = async (req, res) => {
  try {
    const title = req.body.title;
    const image = req.body.image;
    const prevPrice = req.body.prevPrice;
    const price = req.body.price;
    const ratings = req.body.ratings;
    const description = req.body.description;
    const vegetables = {
      title,
      price,
      prevPrice,
      image,
      ratings,
      description,
    };
    const newVegetables = await VegetablesModel.create(vegetables);
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

// get method for fetching all vegetables
exports.getAllVegetables = async (req, res) => {
  try {
    const vegetables = await VegetablesModel.find({});
    res.status(200).json({
      message: "All vegetables found successfully",
      vegetables,
    });
  } catch (error) {
    res.status(404).json({ error });
  }
};

