# :pencil: Pilares da POO

O objetivo dos exercícios desse dia foi aprender os **pilares da Programação Orientada a Objetos (P.O.O)**, que são: **Herança**, que é a capacidade de uma classe herdar atributos e métodos de outra classe, **Abstração**, que é a capacidade de abstrair características de um objeto do mundo real e transformá-las em atributos e métodos de uma classe, **Encapsulamento**, que é a capacidade de proteger atributos e métodos de uma classe, restringindo seu acesso a quem realmente precisa acessá-los e **Polimorfismo** que é a capacidade de implementar um método da superclasse de diferentes formas em suas subclasses, desde que se mantenha a assinatura original. Para isso deveria organizar uma aplicação Python e utilizar os conceitos de `herança`, `abstração`, `encapsulamento` e `polimorfismo` na implementação de uma aplicação.

Os requisitos dos exercícios são:

## 🚀 Exercício 1: Implemente uma classe `TV`

Implemente uma classe `TV` que contenha os seguintes atributos e métodos:

Atributos:

- `volume` - será inicializado com um valor de 50 e só pode estar entre 0 e 99;
- `canal` - será inicializado com um valor de 1 e só pode estar entre 1 e 99;
- `tamanho` - será inicializado com o valor do parâmetro;
- `ligada` - será inicializado com o valor de `False`, pois está inicialmente desligado.

Todos os atributos devem ser privados.

Métodos:

- `aumentar_volume` - aumenta o volume de 1 em 1 até o máximo de 99;
- `diminuir_volume` - diminui o volume de 1 em 1 até o mínimo de 0;
- `modificar_canal` - altera o canal de acordo com o parâmetro recebido e deve lançar uma exceção (`ValueError`) caso o valor esteja fora dos limites;
- `ligar_desligar` - alterna o estado da TV entre ligado e desligado (`True`/`False`).

## Exercício 2: Implemente uma classe `Estatistica`

Implemente uma classe chamada `Estatistica`. Ela deve possuir um atributo `numbers` (uma lista de números) três métodos: um que calcula a média, um que calcula a mediana mediana e outro que calcula a moda de uma lista de números.

🐦 Dica: Você pode utilizar `sorted` para te auxiliar no método `mediana`. 🐦 Dica: Você pode utilizar `collections.Counter` para te auxiliar no método da `moda`.

## Exercício 3: Implemente as classes das figuras geométricas

Você deverá implementar as seguintes classes:

- `FiguraGeometrica`, uma classe abstrata com os seguintes métodos abstratos
    - `area`
    - `perimetro`
- `Quadrado`, que herda de `FiguraGeometrica` e adiciona o atributo `lado`
- `Retangulo`, que herda de `FiguraGeometrica` e adiciona os atributos `base` e `altura`
- `Circulo`, que herda de `FiguraGeometrica` e adiciona o atributo `raio`
