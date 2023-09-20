const VegetableModel = require("../Models/VegetableModel");

// post method for creating a single vegetables item
exports.createNewVegetable = async (req, res) => {
  try {
    const title = req.body.title;
    const photoUrl = req.body.photoUrl;
    const prevPrice = req.body.prevPrice;
    const price = req.body.price;
    const ratings = req.body.ratings;
    const description = req.body.description;
    const vegetable = {
      title,
      price,
      prevPrice,
      photoUrl,
      ratings,
      description,
    };
    const newVegetable = await VegetableModel.create(vegetable);
    res.json({
      message: "New vegetables created successfully",
      newVegetable,
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
    const vegetables = await VegetableModel.find({});
    res.status(200).json({
      message: "All vegetables found successfully",
      vegetables,
    });
  } catch (error) {
    res.status(404).json({ error });
  }
};

