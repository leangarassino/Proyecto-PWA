const jwt = require("jsonwebtoken");

const createToken = (payload) => {
  return jwt.sign(payload, "example", { expiresIn: "2 days" });
};

const decodeToken = (token) => {
  return jwt.verify(token, "example");
};

module.exports = { createToken, decodeToken };
