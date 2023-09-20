const router = require("express").Router();
const {
  createNewVegetable,
  getAllVegetables,
} = require("../Controllers/VegetableController");

router.post("/createNewVegetable", createNewVegetable);
router.get("/", getAllVegetables);

module.exports = router;
