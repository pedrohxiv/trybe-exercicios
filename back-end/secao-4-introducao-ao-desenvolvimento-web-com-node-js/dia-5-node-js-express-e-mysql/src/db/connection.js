const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
  host: 'localhost',
  port: 33060,
  user: 'root',
  password: 'root',
  database: 'todolistdb',
});
