const router = require('express').Router();
const {createNewProduct, getAllProducts} = require("../Controllers/ProductController");

router.post("/createNewProduct", createNewProduct)
router.get("/", getAllProducts)

module.exports = router;