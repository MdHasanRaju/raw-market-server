const router = require("express").Router();
const {
  createNewVegetables,
  getAllVegetables,
} = require("../Controllers/ProductController");

router.post("/createNewVegetables", createNewVegetables);
router.get("/vegetables", getAllVegetables);

module.exports = router;
