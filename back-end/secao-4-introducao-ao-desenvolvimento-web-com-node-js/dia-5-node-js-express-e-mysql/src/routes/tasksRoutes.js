const express = require('express');

const tasksDB = require('../db/tasksDB');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const task = req.body;

    const [{ insertId: id }] = await tasksDB.insert(task);

    return res.status(201).json({ message: `Tarefa de id ${id} cadastrada com sucesso` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma tarefa' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const task = req.body;
    const { id } = req.params;

    const [{ affectedRows }] = await tasksDB.update(task, +id);

    if (!affectedRows) {
      return res.status(404).json({ message: `Tarefa de id ${id} não encontrada` });
    }
    return res.status(200).json({ message: `Tarefa de id ${id} atualizada com sucesso` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Ocorreu um erro ao atualizar uma tarefa' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const [{ affectedRows }] = await tasksDB.remove(+id);

    if (!affectedRows) {
      return res.status(404).json({ message: `Tarefa de id ${id} não encontrada` });
    }
    return res.status(200).json({ message: `Tarefa de id ${id} excluida com sucesso` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Ocorreu um erro ao excluir uma tarefa' });
  }
});

router.get('/', async (_req, res) => {
  try {
    const [result] = await tasksDB.findAll();

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Ocorreu um erro ao consultar as tarefas' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const [[result]] = await tasksDB.findById(+id);

    if (!result) {
      return res.status(404).json({ message: `Tarefa de id ${id} não encontrada` });
    }
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Ocorreu um erro ao consultar a tarefa' });
  }
});

module.exports = router;
