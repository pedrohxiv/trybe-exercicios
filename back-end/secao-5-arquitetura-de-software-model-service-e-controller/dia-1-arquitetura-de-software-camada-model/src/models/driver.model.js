const connection = require('../connection');

const getAll = async () => {
  const result = await connection.execute('SELECT * FROM trybecardb.drivers');
  return result;
};

const getById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM trybecardb.drivers WHERE id = ?',
    [id],
  );
  return result;
};

const create = async (driver) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO trybecardb.drivers (name) VALUE (?)',
    [driver.name],
  );
  return insertId;
};

module.exports = { getAll, getById, create };
