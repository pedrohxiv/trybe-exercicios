# :pencil: JavaScript ES6 - Introdução a Higher Order Functions

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre as _Higher Order Functions_ . Para isso deveria utilizar funções de diferentes formas, passando elas por paramentro ou não.

Os requisitos dos exercícios são:

## Nova pessoa contratada

Crie uma função que retorne um objeto no formato `{ nomeCompleto, email }` representando uma nova pessoa contratada. Passe sua função como parâmetro da _HOF_ `newEmployees` para criar cada pessoa contratada em seu respectivo `id`. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e, a partir dele, gerar automaticamente um email no formato `nome_da_pessoa@trybe.com`.

```
const newEmployees = () => {
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
```

## Sorteador de loteria

Desenvolva uma _HOF_ que retorna o resultado de um sorteio. Esta _HOF_ irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).

## Corretor automático de exame

Crie uma _HOF_ que receberá três parâmetros:

- O primeiro será um array de respostas corretas (soluções);
- O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
- O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
  - Uma resposta correta adiciona 1 ponto à pontuação final;
  - A ausência de uma resposta não altera a pontuação (quando for “N.A”);
  - Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

Ao final, a _HOF_ deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

```
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
```
