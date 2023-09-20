const ProductModel = require("../Models/ProductModel");

// post method for creating a single product
exports.createNewProduct = async (req, res) => {
  try {
    const title = req.body.title;
    const photoUrl = req.body.photoUrl;
    const prevPrice = req.body.prevPrice;
    const price = req.body.price;
    const ratings = req.body.ratings;
    const description = req.body.description;
    const product = {
      title,
      price,
      prevPrice,
      photoUrl,
      ratings,
      description,
    };
    const newProduct = await ProductModel.create(product);
    res.json({
      message: "New product created successfully",
      newProduct,
    });
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// get method for fetching all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.status(200).json({
      message: "All products found successfully",
      products,
    });
  } catch (error) {
    res.status(404).json({ error });
  }
};
