function verificaFimPalavra(word, ending) {
  return word[word.length - 2] + word[word.length - 1] === ending
    ? true
    : false;
}

console.log(verificaFimPalavra('trybe', 'be'));
