import sequelize from 'sequelize';
import Author from './database/models/Author.model';
import Book from './database/models/Book.model';

(async () => {
  const authors = await Author.findAll();
  console.table(authors.map((author) => author.toJSON()));
  process.exit(0);
})();

(async () => {
  const books = await Book.findAll();
  console.table(books.map((book) => book.toJSON()));
  process.exit(0);
})();

(async () => {
  const authors = await Author.findAll({
    include: {
      model: Book,
      attributes: [],
    },
    attributes: [
      ['name', 'author'],
      [sequelize.fn('COUNT', sequelize.col('books.id')), 'totalBooks'],
    ],
    group: 'authors.name',
    order: [[sequelize.literal('totalBooks'), 'DESC']],
    raw: true,
  });
  console.log(authors);
  process.exit(0);
})();
