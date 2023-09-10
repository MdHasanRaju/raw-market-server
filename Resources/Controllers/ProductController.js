const ProductModel = require("../Models/ProductModel");

// create method for a single product
exports.createNewProduct = async (req, res) => {
  try {
    const title = req.body.title;
    const price = req.body.price;
    const prevPrice = req.body.prevPrice;
    const image = req.body.image;
    const ratings = req.body.ratings;
    const desc = req.body.desc;
    const product = {
      title,
      price,
      prevPrice,
      image,
      ratings,
      desc,
    };
    const newProduct = await ProductModel.create(product);
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

// get method for all products
exports.getAllProducts = async (req, res) => {
    try {
        const allProducts = await ProductModel.find({})
        res.status(200).json({message:"All products found successfully", products:allProducts})
    } catch (error) {
        res.status(404).json({error})
    }
}
