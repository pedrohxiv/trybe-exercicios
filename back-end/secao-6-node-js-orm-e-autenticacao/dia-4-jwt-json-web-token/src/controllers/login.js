const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validation = (body) =>
  Joi.object({
    username: Joi.string().min(5).alphanum().required()
    .messages({
      'string.min': '"username" deve ter, pelo menos, 5 caracteres',
      'string.required': 'É necessário preencher o campo "username"',
    }),
    password: Joi.string().min(5).required().messages({
      'string.min': '"password" deve ter, pelo menos, 5 caracteres',
      'string.required': 'É necessário preencher o campo "password"',
    }),
  }).validate(body);

const validateUser = (user) => {
  if (user.username !== 'admin' || user.password !== 's3nh4S3gur4???') {
    const error = new Error('"username" ou "password" inválidos');
    error.statusCode = 401;
    throw error;
  }
};

const generateToken = (user) => {
  const payload = {
    username: user.username,
    admin: true,
  };

  return jwt.sign(payload, JWT_SECRET || 'secretToken', {
    expiresIn: '1h',
  });
};

module.exports = async (req, res, next) => {
  try {
    const { error } = validation(req.body);
    if (error) {
      return next(error);
    }

    validateUser(req.body);

    const token = generateToken(req.body);

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
