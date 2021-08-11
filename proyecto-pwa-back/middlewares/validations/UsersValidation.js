const Joi = require("joi");

const blueprintRegister = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
const validateRegister = (req, res, next) => {
  const result = blueprintRegister.validate(req.body);
  if (!result.error) {
    next();
  } else {
    res.status(422).json(result.error.message);
  }
};

module.exports = validateRegister;
