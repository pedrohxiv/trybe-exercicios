const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

app.use(express.json());

const readFile = async () => {
  try {
    return JSON.parse(await fs.readFile(path.resolve(__dirname, './movies.json')));
  } catch (error) {
    console.error(`Arquivo não pode ser lido: ${error}`);
  }
};

app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const movies = await readFile();
    if (q) {
      const moviesFiltered = movies.filter(({ movie }) => movie.includes(q));
      return res.status(200).json(moviesFiltered);
    }
    return res.status(200).end();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.get('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();
    const movie = movies.find(({ id }) => id === +req.params.id);
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.get('/movies', async (_req, res) => {
  try {
    const movies = await readFile();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await readFile();
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    await fs.writeFile(
      path.resolve(__dirname, './movies.json'),
      JSON.stringify([...movies, newMovie]),
    );
    return res.status(201).json(newMovie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await readFile();
    const index = movies.findIndex(({ id }) => id === +req.params.id);
    movies[index] = {
      id: +req.params.id,
      movie,
      price,
    };
    await fs.writeFile(
      path.resolve(__dirname, './movies.json'),
      JSON.stringify(movies, null, 2),
    );
    return res.status(200).json(movies[index]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();
    const moviesFiltered = movies.filter(({ id }) => id !== +req.params.id);
    await fs.writeFile(
      path.resolve(__dirname, './movies.json'),
      JSON.stringify(moviesFiltered, null, 2),
    );
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = app;
