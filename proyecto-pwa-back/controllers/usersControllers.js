const { User } = require("../models");
const TokenService = require("../services/TokenService");
const bcrypt = require("bcrypt");
const { createToken } = require("../services/TokenService");

module.exports = {
  /**
   * Get all users
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll({
        attributes: {
          exclude: ["password"],
        },
      });
      res.json({ users });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id, {
        attributes: { exclude: ["password"] },
      });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async registerUser(req, res) {
    try {
      const existingUser = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (existingUser) {
        return res.status(400).json({
          error: "Email already registered",
        });
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
      });
      // copy of user.dataValues without password property
      const { password, ...sentValues } = user.dataValues;
      // create token
      const token = createToken({ userId: sentValues.id });

      res.status(201).json({ user: sentValues, token });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async loginUser(req, res) {
    try {
      const values = req.body;
      const { email, password } = values;

      const user = await User.findOne({ where: { email: email } });

      if (!user) {
        res.status(404).json({ ok: false });
      } else {
        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (passwordsMatch) {
          // copy of user.dataValues without password property
          const { password, ...sentValues } = user.dataValues;

          const token = TokenService.createToken({
            userId: user.id,
          });

          res.status(200).json({
            token,
            user: sentValues,
          });
        } else {
          res.status(401).json({ ok: false });
        }
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async deleteUser(req, res) {
    try {
      const response = await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (response == 1) res.sendStatus(204);
      else res.sendStatus(404);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
