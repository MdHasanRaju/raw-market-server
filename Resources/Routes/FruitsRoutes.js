const router = require("express").Router();
const {
  createNewFruits,
  getAllFruits,
} = require("../Controllers/FruitsController");

router.post("/createNewFruits", createNewFruits);
router.get("/", getAllFruits);

module.exports = router;
