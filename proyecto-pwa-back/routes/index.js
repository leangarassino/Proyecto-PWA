const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const categoriesRouter = require("./categories");
const filmsRouter = require("./films");

router.use("/users", usersRouter);
router.use("/categories", categoriesRouter);
router.use("/films", filmsRouter);

module.exports = router;
