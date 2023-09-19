const router = require("express").Router();
const {
  createNewFruits,
  getAllFruits,
} = require("../Controllers/ProductController");

router.post("/createNewFruits", createNewFruits);
router.get("/fruits", getAllFruits);

module.exports = router;
