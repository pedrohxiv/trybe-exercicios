let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

console.log("Numero 6");
console.log(
  "O livro favorito de " +
    leitor["nome"] +
    " " +
    leitor["sobrenome"] +
    " se chama '" +
    leitor["livrosFavoritos"][0]["titulo"] +
    "'"
);

console.log("");
console.log("Numero 7");
leitor.livrosFavoritos[1] = {
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editora: "Rocco",
};

console.log("");
console.log("Numero 8");
console.log(
  leitor["nome"] + " tem " + leitor.livrosFavoritos.length + " livros favoritos"
);
