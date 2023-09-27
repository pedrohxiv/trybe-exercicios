# :pencil: Node.js: Runtime Assíncrono

O objetivo dos exercícios desse dia foi colocar em prática os estudos sobre o **Node.js** (Node, para os íntimos 😜), o por que utilizá-lo e como criar um script simples utilizando ele. Além disso, depois de tanto tempo utilizando o comando `npm`(repositório oficial de pacotes do Node.js), entendi de onde ele vem e o que exatamente ele faz! Também aprendi a baixar e utilizar pacotes de terceiros no meu código e entendi melhor como funciona o sistema de módulos do Node.js. Após isso, coloquei a mão na massa e criei meu primeiro pacote Node utilizando o `npm init`, onde aprendi para que serve cada um dos arquivos que esse comando cria. Para isso deveria utilizar os comandos do `npm` para criar e gerenciar pacotes e dependências, utilizar o comando `node` para executar scripts, utilizar o sistema de módulos do Node.js, criar scripts simples, com interação do usuário, com Node.js, utilizar Funções Assíncronas no Node e utilizar funções de leitura e escrita de arquivos.

Os requisitos dos exercícios são:

## Exercício 1

🚀 Crie um código para calcular o índice de massa corporal(IMC) de uma pessoa.

> _OBS: a sigla IMC, traduzida para o inglês, equivale a BMI(Body Mass Index). Vamos adotar este padrão nos códigos para começarmos a nos acostumar com o formato que aparecerá no mercado de trabalho!_

- Armazene o código no arquivo `bmi.js`.
- A fórmula para calcular o IMC é:

```
IMC = peso / altura²
```

- Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
- Comece criando um novo pacote Node com `npm init` e respondendo às perguntas do `npm`.
- Por enquanto, não se preocupe em pedir _input_ do usuário. Utilize valores fixos para `weight` e `height`.

## Exercício 2

🚀 Agora, permita que o código seja executado através do comando `npm run bmi`.

- O novo código criado deve conter o comando que chama o `node` para executar o arquivo `bmi.js`.

## Exercício 3

🚀 Chegou a hora de tornar nosso código mais interativo! Vamos adicionar inputs de entrada para quem usar.

- Edite o código para que os valores de `weight` e `height` sejam informados pela pessoa ao responder as perguntas: “Qual o seu peso? (kg)” e “Qual a sua altura? (cm)”. Deve-se utilizar o pacote `readline-sync`.

## Exercício 4

🚀 Agora temos um problema, o `peso` não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.

- O pacote `readline-sync` possui uma função específica para tratar esses casos. Consulte a [documentação](https://www.npmjs.com/package/readline-sync#utility_methods) do pacote e encontre a função adequada para realizar input de valores **float**.
- Encontrou a função? Show! Agora utilize-a para solicitar o input de `weight`.

## Exercício 5

🚀 Vamos sofisticar um pouco mais nosso exercício. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:

- Considere a seguinte tabela para classificar a situação do IMC:

| IMC     | Situação                          |
|---------|-----------------------------------|
| <18.5   | Abaixo do peso (magreza)           |
| 18.5-24.9 | Peso normal                       |
| 25.0-29.9 | Acima do peso (sobrepeso)         |
| 30.0-34.9 | Obesidade grau I                  |
| 35.0-39.9 | Obesidade grau II                 |
| >=40.0  | Obesidade graus III e IV           |

## Exercício 6

🚀 Realize o download [deste arquivo](https://lms-assets.betrybe.com/lms/simpsons.json) e salve-o como `simpsons.json`. Utilize o arquivo baixado para realizar os requisitos abaixo.

> _Utilize `async/await` para escrever seu código. Procure não utilizar callbacks._

A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato `id - Nome`. Por exemplo: `1 - Homer Simpson`.

B - Crie uma função que receba o `id` de uma personagem como parâmetro e retorne uma `Promise` que é resolvida com os dados da personagem que possui o `id` informado. Caso não haja uma personagem com o `id` informado, rejeite a Promise com o motivo “id não encontrado”.

C - Crie uma função que altere o arquivo `simpsons.json` retirando os personagens com `id` 10 e 6.

D - Crie uma função que leia o arquivo `simpsons.json` e crie um novo arquivo, chamado `simpsonFamily.json`, contendo as personagens com `id` de 1 a 4.

E - Crie uma função que adicione ao arquivo `simpsonFamily.json` o personagem `Nelson Muntz`.

F - Crie uma função que substitua o personagem `Nelson Muntz` pela personagem `Maggie Simpson` no arquivo `simpsonFamily.json`.
