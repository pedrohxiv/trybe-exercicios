const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

console.log(flatten());

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

function reduceNames() {
  // escreva seu código aqui
  //return books.map((element) => element.author.name).join(', ');
  return books
    .map((element) => element.author.name)
    .reduce((acc, curr) => `${acc}, ${curr}`);
}

console.log(reduceNames());

function averageAge() {
  // escreva seu código aqui
  const arrAges = books.map((age) => age.releaseYear - age.author.birthYear);
  return arrAges.reduce((accSum, currNum) => accSum + currNum) / arrAges.length;
}

console.log(averageAge());

function longestNamedBook() {
  // escreva seu código aqui
  return books.reduce((biggerName, name) =>
    biggerName.name.length > name.name.length ? biggerName : name
  );
}

console.log(longestNamedBook());

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  // escreva seu código aqui
  let qnt = 0;
  const concatNames = names.reduce((acc, curr) => acc + curr).toLowerCase();
  for (const word of concatNames) {
    if (word === "a") qnt++;
  }
  return qnt;
}

console.log(containsA());

const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  // escreva seu código aqui
  return students.map((student, index) => ({
    name: student,
    average:
      grades
        .map((arrGrades) => arrGrades)
        [index].reduce((acc, curr) => acc + curr) /
      grades.map((arrGrades) => arrGrades)[index].length,
  }));
}

console.log(studentAverage());
