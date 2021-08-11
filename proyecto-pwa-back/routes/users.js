const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  loginUser,
  registerUser,
  deleteUser,
  getUser,
} = require("../controllers/usersControllers");
const verifyToken = require("../middlewares/verifyToken");
const validateRegister = require("../middlewares/validations/UsersValidation");
/* GET users listing. */
router.get("/", verifyToken, getAllUsers);
router.get("/:id", verifyToken, getUser);
router.post("/register", validateRegister, registerUser);
router.post("/login", loginUser);
router.delete("/:id", verifyToken, deleteUser);

module.exports = router;
