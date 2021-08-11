const Joi = require("joi");

const blueprintCategory = Joi.object({
  name: Joi.string().min(2).required().messages({
    "string.min": "The name must be at least 2 characters long",
  }),
  description: Joi.string().min(3).max(50).required().messages({
    "string.min": "Description must be at least 3 characters long",
    "string.max": "Description cannot be longer than 30 characters",
  }),
  image: Joi.string().optional(),
});

const validateCategory = (req, res, next) => {
  const result = blueprintCategory.validate(req.body);
  if (!result.error) {
    next();
  } else {
    res.status(422).json({ error: result.error.message });
  }
};

module.exports = validateCategory;
