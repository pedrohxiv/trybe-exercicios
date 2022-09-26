const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

function formatedBookNames() {
  // escreva seu código aqui
  books.map((element) =>
    console.log(`${element.name} - ${element.genre} - ${element.author.name}`)
  );
}

formatedBookNames();

function nameAndAge() {
  // escreva seu código aqui
  console.log(
    books
      .map((element) => ({
        age: element.releaseYear - element.author.birthYear,
        author: element.author.name,
      }))
      .sort((a, b) => a.age - b.age)
  );
}

nameAndAge();

function fantasyOrScienceFiction() {
  // escreva seu código aqui
  console.log(
    books.filter(
      (element) =>
        element.genre === "Ficção Científica" || element.genre === "Fantasia"
    )
  );
}

fantasyOrScienceFiction();

function oldBooksOrdered() {
  // escreva seu código aqui
  console.log(
    books
      .filter((element) => 2022 - element.releaseYear > 60)
      .sort((a, b) => a.releaseYear - b.releaseYear)
  );
}

oldBooksOrdered();

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  console.log(
    books
      .filter(
        (element) =>
          element.genre === "Ficção Científica" || element.genre === "Fantasia"
      )
      .map((book) => book.author.name)
      .sort()
  );
}

fantasyOrScienceFictionAuthors();

function oldBooks() {
  // escreva seu código aqui
  console.log(
    books
      .filter((element) => 2022 - element.releaseYear > 60)
      .map((book) => book.name)
  );
}

oldBooks();

function authorWith3DotsOnName() {
  // escreva seu código aqui
  console.log(
    books.find(
      (element) =>
        element.author.name.split(" ").filter((book) => book.endsWith("."))
          .length === 3
    ).name
  );
}

authorWith3DotsOnName();
