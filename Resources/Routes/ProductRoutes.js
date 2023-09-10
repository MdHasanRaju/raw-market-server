const router = require('express').Router();
const {createNewProduct} = require("../Controllers/ProductController");

router.post("/createNewProduct", createNewProduct)

module.exports = router;