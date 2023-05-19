const { carModel } = require('../models');
const { validateNewCar } = require('./validations/validationsInputValues');

const createCar = async (model, color, licensePlate) => {
  const error = validateNewCar(model, color, licensePlate);
  if (error.type) return error;

  const newCar = await carModel.create({ model, color, licensePlate });
  return { type: null, message: newCar };
};

module.exports = {
  createCar,
};
