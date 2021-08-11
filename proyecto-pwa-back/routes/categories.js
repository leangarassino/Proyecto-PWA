const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  postCategories,
  updateCategories,
  deleteCategories,
} = require("../controllers/categoriesControllers");
const verifyToken = require("../middlewares/verifyToken");
const validateCategory = require("../middlewares/validations/CategoriesValidation");

router.get("/", getAllCategories);
router.post("/", [verifyToken, validateCategory], postCategories);
router.put("/:id", verifyToken, updateCategories);
router.delete("/:id", verifyToken, deleteCategories);

module.exports = router;
