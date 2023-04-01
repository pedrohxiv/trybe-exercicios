const {
  dataTypes,
  checkModelName,
  checkPropertyExists,
  sequelize,
} = require('sequelize-test-helpers');

const BookModel = require('../../src/models/Book');

describe('Testando a camada Models de "Book"', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  it('Verifica se a tabela possui o nome "Book"', () => {
    checkModelName(Book)('Book');
  });

  it('Verifica se a tabela possui as propriedades "title", "author", "pageQuantity", "publisher", "createdAt" e "updatedAt"', () => {
    ['title', 'author', 'pageQuantity', 'publisher', 'createdAt', 'updatedAt'].forEach(
      checkPropertyExists(book),
    );
  });
});
