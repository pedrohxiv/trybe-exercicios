# :pencil: Classes e Tipos de Dados

O objetivo dos exercícios desse dia foi fortalecer habilidades essenciais em Java, desde o
entendimento de classes e métodos até a manipulação eficaz de dados por meio de tipos primitivos,
não primitivos, strings e arrays. Compreender esses conceitos é fundamental para qualquer
desenvolvedor Java, proporcionando uma base sólida para construir aplicações robustas e eficientes.
Para isso deveria compreender classes em Java, entender o método `main`, compreender Tipos
Primitivos e Não Primitivos em Java, entender Strings e Arrays e trabalhar com Classes Wrapper em
Java.

Os requisitos dos exercícios são:

## Exercício 1 - Controle da Lâmpada

<details>
  <summary>Descrição</summary><br />

Para a primeira tarefa, espera-se que você consiga criar um algoritmo usando a linguagem Java. Este
algoritmo deve controlar o estado de uma lâmpada. Para isso, você precisa implementar dois
métodos: `ligarLampada` e `desligarLampada`, que irão mudar o estado da lâmpada. Além disso, você
também deve criar um terceiro método, chamado `isLampadaLigada`, que será responsável por verificar
e informar se a lâmpada está ligada ou não.💡

```java
public class SmartHouse {

  /*
   * Atributos.
   */

  /*
   * Métodos `ligarLampada`, `desligarLampada` e `isLampadaLigada`.
   */
}
```

Por exemplo,

- Supondo que a lâmpada esteja ligada, então a saída para o método `isLampadaLigada` será:

```text
true
```

- Supondo que a lâmpada esteja desligada, então a saída para o método `isLampadaLigada` será:

```text
false
```

</details>

## Exercício 2 - Monitoramento do Residente

<details>
  <summary>Descrição</summary><br />

No segundo requisito a casa inteligente precisa monitorar quem está residindo nela.

Você implementará a parte de um sistema! Sua função é implementar a classe `Residente` com os
atributos públicos:

- `nome`: esse atributo é do tipo `String`;
- `idade`: esse atributo é do tipo `int`;
- `peso`: esse atributo é do tipo `double`;
- `altura`: esse atributo é do tipo `double`;

```java
public class Residente {

  // Seu código aqui
  /*
   * Atributos.
   */
}
```

Implemente seu construtor para que, quando um novo residente surgir (o objeto seja instanciado),
seus atributos já sejam inicializados.

Imagine que você deseja visualizar as informações de um residente na saída do console do seu
ambiente de desenvolvimento integrado (IDE). Veja abaixo como fazer isso com mais detalhes:

1. Criando a casa (objeto 'residente'): Primeiro, nós precisamos de um objeto Residente para
   representar a residente. No nosso exemplo, vamos criar um objeto residente que representa uma
   casa com um residente chamado "João". Este residente tem 22 anos, pesa 72 kg com 1,75 metros de
   altura. Criamos este objeto da seguinte forma:

```java
Residente residente=new Residente("João",22,72,1.75);
```

2. Imprimindo as informações do residente: Agora que temos o nosso objeto residente, podemos
   imprimir as informações do residente no console. Para isso, utilizamos System.out.println, que é
   o comando que imprime textos na saída padrão (geralmente, o console da sua IDE). Aqui está como
   fazemos isso:

```java
System.out.println("Nome: "+residente.nome+"\nIdade: "+residente.idade+"\nPeso: "+residente.peso
    +"\nAltura: "+residente.altura);
```

Aqui está o código completo:

```java
public class Principal {

  public static void main(String[] args) {
    Resident residente = new Resident("João", 22, 72, 1.75);

    System.out.println(
        "Nome: " + residente.nome + "\nIdade: " + residente.idade + "\nPeso: " + residente.peso
            + "\nAltura: " + residente.altura);
  }

}
```

</details>

## Exercício 3 - Cálculo do IMC

<details>
  <summary>Descrição</summary><br />

O terceiro requisito a casa inteligente deve conseguir calcular o Índice de Massa Corporal (IMC) do
residente. Para isso, crie o método

- `calcularImc`

Por exemplo,

Supondo que os dados sejam: peso igual a 72kg e altura igual a 1.75, então a saída será:

```text
23.51020
```

Supondo que os dados sejam: peso igual a 54kg e altura igual a 1.70, então a saída será:

```text
18.68512
```

Imagine que você deseja visualizar as informações de um residente na saída do console do seu
ambiente de desenvolvimento integrado (IDE). Veja abaixo como fazer isso com mais detalhes:

1. Criando o objeto `'residente'`: Primeiro, precisamos de um objeto Residente para representar o
   residente. Vamos criar um objeto chamado residente com nome de "João". Este residente tem 22
   anos, pesa 72 kg e mede 1.75 metros de altura. Criamos esse objeto assim:

```java
Resident residente=new Residente("João",22,72,1.75);
```

2. Calculando o IMC: O Índice de Massa Corporal é uma medida útil para entender se alguém está num
   peso saudável para a sua altura. No nosso objeto residente, há um método chamado calculaImc que
   realiza esse cálculo para o residente. Nós chamamos esse método e armazenamos o resultado na
   variável h:

```java
double h=residente.calculaImc();
```

Lembre-se, double é um tipo de dado que pode conter números reais, que é o tipo de valor que o
cálculo do IMC produz.

Aqui está o código completo:

```java
public class Principal {

  public static void main(String[] args) {
    Residente residente = new Residente("João", 22, 72, 1.75);
    double h = residente.calculaImc();
    System.out.println(h);
  }
}
```

Após executar este programa, a saída será um número que representa o IMC do residente "João". Por
exemplo, pode aparecer 23.51020, o IMC calculado com base no peso e altura fornecidos.

</details>

## Exercício 4 - Conexão à Internet

<details>
  <summary>Descrição</summary><br />

No quarto requisito, a casa inteligente deve tentar se conectar à internet. Dito isso, crie um
método `conectarInternet` que simula a tentativa de conexão à internet usando uma taxa de conexão
fornecida.

```java
public class SmartHouse {

  // Seu código aqui

  /*
   * Método `conectarInternet`.
   */
}
```

**Por exemplo:**

O método `conectarInternet` deve simular a tentativa da casa inteligente de se conectar à internet
usando uma taxa de sucesso fornecida. Lembre-se de que este é um método de simulação; portanto, não
precisaremos realmente implementar uma conexão com a Internet, apenas simular o processo.

Comece escrevendo a assinatura do método. No caso, ele é um método público que retorna um booleano (
verdadeiro ou falso). Portanto, sua assinatura deve começar com `public boolean`. Em seguida, dê o
nome ao método `conectarInternet` e adicione parênteses com um argumento `double` para a taxa de
sucesso da conexão.

A lógica interna do método é bastante direta:

1. Se a `connectionRate` (taxa de conexão) for maior que 0.5, o método deve retornar `true`,
   indicando uma conexão bem-sucedida.
2. Se for menor ou igual a 0.5, o método deve retornar `false`, indicando que a conexão falhou.

**Por exemplo**, ao chamar `conectarInternet(0.8)`, você terá uma alta chance de sucesso e
retornará `true`. No entanto, ao chamar `conectarInternet(0.2)`, o retorno é `false`.

```java
public class Principal {

  public static void main(String[] args) {
    SmartHouse casa = new SmartHouse();
    boolean conectado = casa.conectarInternet(0.7);
    System.out.println(conectado ? "Conectado à Internet" : "Falha na conexão à Internet");
  }
}
```

</details>