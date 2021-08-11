const { Films } = require("../models");

module.exports = {
  async getAllFilms(req, res) {
    try {
      const films = await Films.findAll();
      res.json(films);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async getSingleFilm(req, res) {
    try {
      const films = Films.create(req.body);
      res.json(films);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async updateFilm(req, res) {
    try {
      await Films.update(req.body, { where: { id: req.params.id } });
      res.json({ succes: "se ha modificado el film" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async deleteFilm(req, res) {
    try {
      await Films.destroy({ where: { id: req.params.id } });
      res.json({ succes: "Se ha borrado el film" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
