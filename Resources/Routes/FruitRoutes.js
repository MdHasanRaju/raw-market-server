const router = require("express").Router();
const {
  createNewFruit,
  getAllFruits,
} = require("../Controllers/FruitController");

router.post("/createNewFruit", createNewFruit);
router.get("/", getAllFruits);

module.exports = router;
