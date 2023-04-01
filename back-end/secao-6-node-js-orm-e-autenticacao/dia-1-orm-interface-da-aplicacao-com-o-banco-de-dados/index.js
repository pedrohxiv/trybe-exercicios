const express = require('express');

const BookController = require('./src/controllers/Book');

const app = express();
const PORT = process.env.PORT || 3006;

app.use(express.json());

app.get('/books', BookController.getAll);
app.get('/books/:id', BookController.getById);
app.post('/books', BookController.create);
app.put('/books/:id', BookController.update);
app.delete('/books/:id', BookController.remove);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
