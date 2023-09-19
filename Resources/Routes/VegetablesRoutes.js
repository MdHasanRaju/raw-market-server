const router = require("express").Router();
const {
  createNewVegetables,
  getAllVegetables,
} = require("../Controllers/VegetablesController");

router.post("/createNewVegetables", createNewVegetables);
router.get("/", getAllVegetables);

module.exports = router;
