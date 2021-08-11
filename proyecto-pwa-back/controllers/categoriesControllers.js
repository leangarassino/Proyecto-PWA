const { Categories } = require("../models");

module.exports = {
  async getAllCategories(req, res) {
    try {
      const categories = await Categories.findAll();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async postCategories(req, res) {
    try {
      const categories = await Categories.create(req.body);
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async updateCategories(req, res) {
    try {
      await Categories.update(req.body, {
        where: { id: req.params.id },
      });
      res.json({ succes: "Se ha modificado" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async deleteCategories(req, res) {
    try {
      await Categories.destroy({
        where: { id: req.params.id },
      });
      res.json({ succes: "Se ha borrado el genero" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
