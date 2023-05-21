const connection = require('./connection');

const insert = (task) =>
  connection.execute('INSERT INTO todolistdb.tasks (nome, descricao) VALUES (?, ?)', [
    task.nome,
    task.descricao,
  ]);

const update = (task, id) =>
  connection.execute('UPDATE todolistdb.tasks SET nome = ?, descricao = ? WHERE id = ?', [
    task.nome,
    task.descricao,
    id,
  ]);

const remove = (id) =>
  connection.execute('DELETE FROM todolistdb.tasks WHERE id = ?', [id]);

const findAll = () => connection.execute('SELECT * FROM todolistdb.tasks');

const findById = (id) =>
  connection.execute('SELECT * FROM todolistdb.tasks WHERE id = ?', [id]);

module.exports = {
  insert,
  update,
  remove,
  findAll,
  findById,
};
