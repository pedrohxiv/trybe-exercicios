# :pencil: Polimorfismo, Interfaces e Classes Abstratas

O objetivo dos exercícios desse dia foi aprender um pouco mais da programação orientada a objetos (POO), utilizando da linguagem Java. Para isso deveria aprender o Polimorfismo, Métodos Abstratos, Interfaces, Herança entre Interfaces e Métodos e Atributos Estáticos

Os requisitos dos exercícios são:

## Gestão de Veículos

### 1 - Calcular o consumo de combustível do Carro

<details>
  <summary>Implemente a classe Carro com o método para calcular o consumo de combustível</summary><br />

Para iniciar a implementação do seu exercício, siga os passos a seguir.

1. Crie uma interface `Veiculo.java` que define os métodos que devem ser implementados pelos veículos:

```java
public interface Veiculo {

  double calcularConsumoCombustivel(double distancia);
  void exibirInformacoes();
}
```

2. Crie uma classe abstrata `VeiculoBase.java`: ela implementa a interface `Veiculo` e contém atributos e métodos comuns a todos os veículos:

```java
public abstract class VeiculoBase implements Veiculo{

  private String marca;
  private String modelo;
  private int ano;
  private String tipoCombustivel;
  private int capacidadeTanque;

  // métodos, getter's e setter's
}
```

3. Crie um construtor na `VeiculoBase` que receba todos os atributos definidos.

4. Implemente a classe `Carro.java`, que estende `VeiculoBase` e representa um carro. Na classe você deve:

   - Criar um atributo com o número de passageiros;
   - Criar um construtor que recebe todos os atributos originais da classe `VeiculoBase`, mais o novo atributo;
   - Chamar o construtor da classe abstrata dentro do novo construtor.

5. Implemente na classe `Carro` os métodos definidos na interface:
   - `calcularConsumoCombustivel`: este método deve calcular o consumo de combustível a partir da distância. Considere que o consumo é calculado dividindo a distância por `10`.
   - `exibirInformacoes`: utilize esse método para mostrar informações específicas da classe. Não há necessidade de seguir um formato específico.

</details>

### 2 - Calcular o consumo de combustível do Caminhão

<details>
  <summary>Implemente a classe Caminhão com o método para calcular o consumo de combustível</summary><br />

Para iniciar a implementação do seu exercício, siga os passos a seguir.

1. Implemente a classe `Caminhao.java`, que estende `VeiculoBase` e representa um caminhão. Na classe você deve:

   - Criar um atributo com o número de passageiros;
   - Criar um construtor que recebe todos os atributos originais da classe `VeiculoBase`, mais o novo atributo;
   - Chamar o construtor da classe abstrata dentro do novo construtor.

2. Implemente na classe `Caminhao` os métodos definidos na interface:
   - `calcularConsumoCombustivel`: este método deve calcular o consumo de combustível a partir da distância. Considere que o consumo é calculado dividindo a distância por `6.0`.
   - `exibirInformacoes`: utilize esse método para mostrar informações específicas da classe. Não há necessidade de seguir um formato específico.

</details>

### 3 - Calcular o consumo de combustível da Moto

<details>
  <summary>Implemente a classe Moto com o método para calcular o consumo de combustível</summary><br />

Para iniciar a implementação do seu exercício, siga os passos a seguir.

1. Implemente a classe `Moto.java`, que estende `VeiculoBase` e representa uma moto. Na classe você deve:

   - Criar um atributo com o número de passageiros;
   - Criar um construtor que recebe todos os atributos originais da classe `VeiculoBase`, mais o novo atributo;
   - Chamar o construtor da classe abstrata dentro do novo construtor.

2. Implemente na classe `Moto` os métodos definidos na interface:
   - `calcularConsumoCombustivel`: este método deve calcular o consumo de combustível a partir da distância. Considere que o consumo é calculado dividindo a distância por `18.0`.
   - `exibirInformacoes`: utilize esse método para mostrar informações específicas da classe. Não há necessidade de seguir um formato específico.

</details>
