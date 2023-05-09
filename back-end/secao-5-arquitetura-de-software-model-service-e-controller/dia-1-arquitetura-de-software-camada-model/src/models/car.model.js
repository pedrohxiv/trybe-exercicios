const connection = require('./connection');

const create = async (car) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO trybecardb.cars (model, color, license_plate) VALUE (?, ?, ?)',
    [car.model, car.color, car.licensePlate],
  );
  return insertId;
};

const getById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM trybecardb.cars WHERE id = ?',
    [id],
  );
  return result;
};

module.exports = { create, getById };
