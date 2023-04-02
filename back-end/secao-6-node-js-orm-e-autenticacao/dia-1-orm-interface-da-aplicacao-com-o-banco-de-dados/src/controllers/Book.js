const BookService = require('../services/Book');

const getAll = async (req, res) => {
  const { author } = req.query;

  const books = author
    ? await BookService.getByAuthor(author)
    : await BookService.getAll();

  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const book = await BookService.getById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });
  return res.status(200).json(book);
};

const create = async (req, res) => {
  const { title, author, pageQuantity, publisher } = req.body;

  const newBook = await BookService.create({ title, author, pageQuantity, publisher });

  return res.status(201).json(newBook);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, publisher } = req.body;

  const updatedBook = await BookService.update(id, {
    title,
    author,
    pageQuantity,
    publisher,
  });

  if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
  return res.status(201).json({ message: 'Book updated' });
};

const remove = async (req, res) => {
  const { id } = req.params;

  const removedBook = await BookService.remove(id);

  if (!removedBook) return res.status(404).json({ message: 'Book not found' });
  return res.status(200).json({ message: 'Book removed' });
};

module.exports = { getAll, getById, create, update, remove };
