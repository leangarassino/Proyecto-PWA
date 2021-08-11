const express = require("express");
const router = express.Router();

const {
  getAllFilms,
  getSingleFilm,
  updateFilm,
  deleteFilm,
} = require("../controllers/filmsControllers");
const verifyToken = require("../middlewares/verifyToken");

router.get("/", getAllFilms);
router.get("/:id", verifyToken, getSingleFilm);
router.put("/:id", verifyToken, updateFilm);
router.delete("/:id", verifyToken, deleteFilm);

module.exports = router;
