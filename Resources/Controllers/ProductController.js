const Product = require("../Models/Product");

// create method for a single product
exports.createNewProduct = async (req, res) => {
  try {
    const title = req.body.title;
    const price = req.body.price;
    const prevPrice = req.body.prevPrice;
    const image = req.body.image;
    const ratings = req.body.ratings;
    const desc = req.body.desc;
    const newProduct = {
      title,
      price,
      prevPrice,
      image,
      ratings,
      desc,
    };
    res.json({
      message: "New product created successfully",
      newProduct,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
    });
  }
};
