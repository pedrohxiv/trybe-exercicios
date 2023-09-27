# :pencil: Pilhas e Filas

O objetivo dos exercícios desse dia foi aprender a criar estruturas de dados utilizando pilhas (_stack_, em inglês) e como essa estrutura é organizada. Também aprendi como utilizar a pilha, adicionando algumas tarefas para uma classe de pilha. Aprendi como utilizar pilhas para entender o funcionamento da chamada de funções do Python e também para a resolução de expressões matemáticas utilizando a `Notação Polonesa Reversa` (_RPN_). Para isso deveria entender o funcionamento da estrutura de dados pilha (`stack`), adicionar, remover, saber a quantidade e limpar itens de uma pilha e identificar e escolher o uso de pilhas em diferentes casos.

Os requisitos dos exercícios são:

## 🚀 Exercício 1:

_Filas_: crie uma classe `Queue`, onde deve conter as operações: `enqueue`, `dequeue`, `peek` e `is_empty`.

> _Para este desafio, é necessário efetuar o `import` das classes `LinkedList` e `Node` e utilizar seus métodos de acesso para simular uma fila, respeitando o padrão_ **FIFO**.

## Exercício 2:

_Pilhas_: crie uma classe `Stack`, onde deve conter as operações: `push`, `pop`, `peek` e `is_empty`.

## Exercício 3:

Estenda a classe `Stack`, que escrevemos durante as explicações do conteúdo, adicionando uma nova função chamada `min_value()` que irá retornar o menor valor inteiro presente na pilha. Por exemplo:

> _stack.py_

```
# ...

content_stack.push(1)
content_stack.push(-2)
content_stack.push(3)
print(content_stack.min_value()) # saída: -2
```

> Fonte: [Min Stack](https://leetcode.com/problems/min-stack/)

> Faça a análise de complexidade da sua solução.

## Exercício 4:

Estenda a classe `Stack`, que escrevemos durante as explicações do conteúdo, para que ela suporte um limite de itens dentro da pilha. Se definirmos que a pilha deve ter o tamanho dois, ela não poderá ter três itens. Por exemplo:

> _stack_limit.py_

```
# ...

content_stack = LimitStack(2)
content_stack.push(1)
content_stack.push(-2)

try:
    content_stack.push(3)
except StackOverflow:
    print("Não é possível adicionar outro item à pilha")
```

> Dica: Para esse exercício, crie uma nova classe, no mesmo diretório da classe `Stack`.

> Faça a análise de complexidade da sua solução.

## Exercício 5:

Um estacionamento comercial possui uma garagem em forma de linha, ou seja, somente é possível parar os carros enfileirados. Para auxiliar as pessoas que trabalham manobrando os veículos, iremos escrever um programa para que eles consigam adicionar novos veículos na garagem e retirar os veículos conforme a solicitação dos clientes. Escreva um programa que faça essas duas operações, inserção de veículos e a remoção do veículo desejado pela pessoa. Lembrando que os veículos que foram removidos para se chegar no veículo do cliente, ficam parados na rua e depois são adicionados na mesma ordem que estavam no estacionamento.

> Faça a análise de complexidade da sua solução.

## Exercício 6:

Dada a função que faz a resolução de expressões pós fixas, adicione as operações de subtração e divisão. Considere os exemplos abaixo para testar a sua alteração na função.

_Nota_: transforme as expressões em pós fixas e atribua valores. Caso seja necessário, faça o `cast` do valor para ponto flutuante.

> Faça a análise de complexidade da sua solução.
