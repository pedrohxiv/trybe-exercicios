const { expect } = require('chai');
const { stub } = require('sinon');

const { Book } = require('../../src/models');
const BookService = require('../../src/services/Book');

const mockedBook = {
  id: 1,
  title: 'Animal Farm',
  author: 'George Orwell',
  pageQuantity: 112,
  createdAt: '2022-09-07 11:23:39',
  updatedAt: '2022-09-22 15:56:29',
};

describe('Testando a camada Services de "Book"', () => {
  describe('Verifica a função "getAll"', () => {
    const findAllStub = stub(Book, 'findAll');
    let books;

    describe('Testando a função quando não existe nenhum livro cadastrado', () => {
      beforeEach(async () => {
        findAllStub.resolves([]);
        books = await BookService.getAll();
      });
      afterEach(() => {
        findAllStub.reset();
        books = null;
      });

      it('Verifica se a função é chamada', () => {
        expect(Book.findAll.calledOnce).to.be.equals(true);
      });
      it('Verifica se a resposta é um array', () => {
        expect(books).to.be.an('array');
      });
      it('Verifica se o array está vazio', () => {
        expect(books).to.be.empty;
      });
    });

    describe('Testando a função quando existem livros cadastrados', () => {
      beforeEach(async () => {
        findAllStub.resolves([mockedBook]);
        books = await BookService.getAll();
      });
      afterEach(() => {
        findAllStub.reset();
        books = null;
      });

      it('Verifica se a função é chamada', () => {
        expect(Book.findAll.calledOnce).to.be.equals(true);
      });
      it('Verifica se a resposta é um array', () => {
        expect(books).to.be.an('array');
      });
      it('Verifica se é um objeto contendo os dados do livro', () => {
        expect(books).to.be.deep.equal([mockedBook]);
      });
    });
  });

  describe('Verifica a função "getById"', () => {
    const findByPkStub = stub(Book, 'findByPk');
    let book;

    describe('Testando a função quando não existe o livro', () => {
      beforeEach(async () => {
        findByPkStub.resolves(null);
        book = await BookService.getById(9999);
      });
      afterEach(() => {
        findByPkStub.reset();
        book = null;
      });

      it('Verifica se a função é chamada', () => {
        expect(Book.findByPk.calledOnce).to.be.equals(true);
      });
      it('Verifica se a resposta é "null"', () => {
        expect(book).to.be.null;
      });
    });

    describe('Testando a função quando existe o livro', () => {
      beforeEach(async () => {
        findByPkStub.resolves(mockedBook);
        book = await BookService.getById(1);
      });
      afterEach(() => {
        findByPkStub.reset();
        book = null;
      });

      it('Verifica se a função é chamada', () => {
        expect(Book.findByPk.calledOnce).to.be.equals(true);
      });
      it('Verifica se a resposta é um objeto contendo os dados do livro', () => {
        expect(book).to.be.deep.equal(mockedBook);
      });
    });
  });

  describe('Verifica a função "create"', () => {
    const createStub = stub(Book, 'create');
    const mockedCreateBook = {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      pageQuantity: 224,
    };
    let newBook;

    beforeEach(async () => {
      createStub.resolves({
        id: 2,
        ...mockedCreateBook,
        updatedAt: '2023-04-01T15:45:28.398Z',
        createdAt: '2023-04-01T15:45:28.398Z',
      });
      newBook = await BookService.create(mockedCreateBook);
    });
    afterEach(() => {
      createStub.reset();
      newBook = null;
    });

    it('Verifica se a função é chamada', () => {
      expect(Book.create.calledOnce).to.be.equals(true);
    });
    it('Verifica se a resposta é um objeto contendo os dados do livro', () => {
      expect(newBook).to.include(mockedCreateBook);
    });
  });

  describe('Verifica a função "update"', () => {
    const updateStub = stub(Book, 'update');
    const mockedUpdateBook = {
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      pageQuantity: 689,
    };
    let updatedBook;

    describe('Testando a função quando não existe o livro', () => {
      beforeEach(async () => {
        updateStub.resolves([false]);
        updatedBook = await BookService.update(9999, mockedUpdateBook);
      });
      afterEach(() => {
        updateStub.reset();
        updatedBook = null;
      });

      it('Verifica se a função é chamada', () => {
        expect(Book.update.calledOnce).to.be.equals(true);
      });
      it('Verifica se a resposta é "false"', () => {
        expect(updatedBook).to.be.false;
      });
    });

    describe('Testando a função quando existe o livro', () => {
      beforeEach(async () => {
        updateStub.resolves([true]);
        updatedBook = await BookService.update(2, mockedUpdateBook);
      });
      afterEach(() => {
        updateStub.reset();
        updatedBook = null;
      });

      it('Verifica se a função é chamada', () => {
        expect(Book.update.calledOnce).to.be.equals(true);
      });
      it('Verifica se a resposta é "true"', () => {
        expect(updatedBook).to.be.true;
      });
    });
  });

  describe('Verifica a função "remove"', () => {
    const destroyStub = stub(Book, 'destroy');
    let removedBook;

    describe('Testando a função quando não existe o livro', () => {
      beforeEach(async () => {
        destroyStub.resolves(false);
        removedBook = await BookService.remove(9999);
      });
      afterEach(() => {
        destroyStub.reset();
        removedBook = null;
      });

      it('Verifica se a função é chamada', () => {
        expect(Book.destroy.calledOnce).to.be.equals(true);
      });
      it('Verifica se a resposta é "false"', () => {
        expect(removedBook).to.be.eq(false);
      });
    });

    describe('Testando a função quando existe o livro', () => {
      beforeEach(async () => {
        destroyStub.resolves(true);
        removedBook = await BookService.remove(2);
      });
      afterEach(() => {
        destroyStub.reset();
        removedBook = null;
      });

      it('Verifica se a função é chamada', () => {
        expect(Book.destroy.calledOnce).to.be.equals(true);
      });
      it('Verifica se a resposta é "true"', () => {
        expect(removedBook).to.be.eq(true);
      });
    });
  });

  describe('Verifica a função "getByAuthor"', () => {
    let findAllStub = Book.findAll;
    let books;

    describe('Testando a função quando não existe nenhum livro cadastrado', () => {
      beforeEach(async () => {
        if (!findAllStub.restore) findAllStub = stub(Book, 'findAll');
        findAllStub.resolves([]);
        books = await BookService.getByAuthor('George Orwell');
      });
      afterEach(() => {
        findAllStub.reset();
        books = null;
      });

      it('Verifica se a função é chamada', () => {
        expect(Book.findAll.calledOnce).to.be.equals(true);
      });
      it('Verifica se a resposta é um array', () => {
        expect(books).to.be.an('array');
      });
      it('Verifica se o array está vazio', () => {
        expect(books).to.be.empty;
      });
    });

    describe('Testando a função quando existem livros cadastrados', () => {
      beforeEach(async () => {
        if (!findAllStub.restore) findAllStub = stub(Book, 'findAll');
        findAllStub.resolves([mockedBook]);
        books = await BookService.getByAuthor('George Orwell');
      });
      afterEach(() => {
        findAllStub.reset();
        books = null;
      });

      it('Verifica se a função é chamada', () => {
        expect(Book.findAll.calledOnce).to.be.equals(true);
      });
      it('Verifica se a resposta é um array', () => {
        expect(books).to.be.an('array');
      });
      it('Verifica se é um objeto contendo os dados do livro', () => {
        expect(books).to.be.deep.equal([mockedBook]);
      });
    });
  });
});
