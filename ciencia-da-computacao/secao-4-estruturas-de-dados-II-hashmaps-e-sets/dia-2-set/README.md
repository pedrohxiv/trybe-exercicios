# :pencil: Set

O objetivo dos exercícios desse dia foi aprender sobre o **Set**. O “Conjunto” (_set_) é um conceito matemático que é muito útil na computação, uma vez que muitas entidades do mundo real podem ser modeladas como conjuntos. Relembrei o conceito e operações típicas, aplicadas a um conjunto, tanto de maneira conceitual como no código. A linguagem Python facilita muito a nossa vida ao prover métodos que implementam essas operações, porém existem linguagens que não vão ter essas operações de forma nativa. Para garantir que saberei usar conjuntos sempre que precisar, aprendi a implementar essas operações do zero. Para isso deveria compreender o conceito de _conjunto_ e suas operações básicas, representar conjuntos de três formas distintas em Python, implementar uma classe `Set` manualmente, instanciar e utilizar os métodos da classe `Set`, de Python e identificar e resolver problemas com `Set`.

Os requisitos dos exercícios são:

## 🚀 Exercício 1 - Blefe

Blefe é um jogo de duas pessoas onde cada uma tenta adivinhar os número que a outra irá escolher. Cada jogador escolhe 5 números de 0 a 10, inclusive. A pontuação final é calculada da seguinte forma:

- A nota de partida de cada pessoa é o maior número que a outra pessoa não escolheu;
- O redutor é o menor numero que a outra pessoa não escolheu;
- A pontuação final é a `nota de partida - redutor`.

_Exemplo:_

```
clara = [0, 1, 5, 9, 10]
# nota de partida: 5
# redutor: 1
# pt: 4

marco = [0, 2, 8, 9, 10]
# nota de partida: 8
# redutor: 2
# pt individual: 6

# Quem ganhou: Marco
```

Implemente uma função que receba um dicionário com os nomes e números chutados e retorne o nome de quem ganhou.

```
entrada = {
    'Clara': [0, 1, 5, 9, 10],
    'Marco': [0, 2, 8, 9, 10]
}

# saída: 'Marco'
```

> _**Faça a análise de complexidade da sua solução.**_

## Exercício 2 - Substring

Dada uma _string_, ache o tamanho da maior _substring_ que não tenha caracteres repetidos. Complexidade de tempo limite aceitável: `O(n²)`.

```
string = "serdevemuitolegalmasehprecisoestudarbastante"
```

> _**Faça a análise de complexidade da sua solução.**_
