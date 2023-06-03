# :pencil:  Usando o Redux no React - Prática



Os requisitos dos exercícios são:

## Exercício 1:

Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo:

_Entrada:_

```
PEDRO
```

_Saída:_

```
PEDRO
PEDR
PED
PE
P
```

## Exercício 2:

_Jogo da palavra embaralhada_. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

🦜 Para embaralhar uma palavra faça: `scrambled_word = "".join(random.sample(word, len(word)))`

🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: `random.choice(["word1", "word2", "word3"]) -> "word2"`.

## Exercício 3:

Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada palavra em uma linha.

## 🚀 Exercício 4:

Dado o seguinte [arquivo](https://lms-assets.betrybe.com/lms/books.json) no formato **JSON**, leia seu conteúdo e calcule a porcentagem de livros em cada categoria em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato **CSV** como o exemplo abaixo.

_Saída:_

```
categoria,porcentagem
Python,0.23201856148491878
Java,0.23201856148491878
PHP,0.23201856148491878
```

## 🚀 Exercício 5:

> _Realize esse exercício utilizando TDD: implemente os testes e depois a função 🧪_

Escreva um programa que retorne uma lista com os valores numéricos de 1 a N, mas com as seguintes **exceções**:

- Números divisíveis por 3 deve aparecer como “Fizz” ao invés do número;
- Números divisíveis por 5 devem aparecer como “Buzz” ao invés do número;
- Números divisíveis por 3 e 5 devem aparecer como “FizzBuzz” ao invés do número.

Exemplo: `3 -> [1, 2, "Fizz"]`.

## 🚀 Exercício 6:

> _Realize esse exercício utilizando TDD: implemente os testes e depois a função 🧪_

Faça uma função que valide um e-mail, lançando uma exceção quando o valor for inválido. Endereços de e-mail válidos devem seguir as seguintes regras:

- Devem seguir o formato `nomeusuario@nomewebsite.extensao`;
- O nome de usuário deve conter somente letras, dígitos, traços e underscores (_);
- O nome de usuário deve iniciar com uma letra;
- O nome do website deve conter somente letras e dígitos;
- O tamanho máximo da extensão é de 3 caracteres.

🦜 As funções `isalpha`, `isdigit` e `isnumeric` podem ser utilizadas para verificar se uma letra ou palavra são compostas de somente caracteres ou dígitos. Exemplo: `"1".isalpha() -> False , "a".isalpha() -> True, "123".isnumeric() -> True`.

## Exercício 7

Utilizando o arquivo [pokemons.json](https://lms-assets.betrybe.com/lms/pokemons.json), vamos escrever um programa que sorteie um pokemon aleatoriamente. O programa deve perguntar à pessoa usuária “Quem é esse pokemon?” até que ela o acerte. A cada erro, apresente um número de letras do nome daquele pokemon igual ao número de erros.

Exemplo: O pokemon sorteado pelo programa é `butterfree`; a pessoa usuária chuta `charizard`; o programa deve exibir `b`. Em seguida, a pessoa chuta `blastoise`; o programa deve exibir `bu`; e assim por diante até a pessoa acertar.

🦜 Você pode utilizar o método `choice` do modulo `random` para sortear aleatoriamente um pokemon. Ex: `random.choice(pokemon)` -> `{"name": "Pikachu" }`.
