const connection = require('../connection');

const create = async (driverCar) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO trybecardb.drivers_cars (driver_id, car_id) VALUE (?, ?)',
    [driverCar.driverId, driverCar.carId],
  );
  return insertId;
};

module.exports = { create };
