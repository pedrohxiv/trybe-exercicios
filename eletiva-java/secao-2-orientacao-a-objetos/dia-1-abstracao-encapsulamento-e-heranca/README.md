# :pencil: Abstração, Encapsulamento e Herança

O objetivo dos exercícios desse dia foi aprender três dos quatro principais pilares da programação orientada a objetos (POO), a Abstração, o Encapsulamento e a Herança, aplicando seus conceitos em Java. Para isso deveria aprender os conceitos de Abstração, Encapsulamento, Atributos, Métodos e Construtores além dos Getters e Setters, Herança e os Modificadores de Acesso - Public, Private, Default e Protected. 

Os requisitos dos exercícios são:

## Exercício 1. Sistema de Recursos Humanos

<details>
  <summary>Descrição</summary><br />

Neste requisito, você implementará a parte de um sistema de recursos humanos para a Trybe! Sua função é implementar a classe `PessoaFuncionaria` com os atributos privados:

- `nomeCompleto`: esse atributo é do tipo `String`;
- `cpf`: esse atributo é do tipo `String`;
- `endereco`: esse atributo é do tipo `String`;
- `salario`: esse atributo é do tipo `double`;

Implemente seu construtor para que, quando uma nova pessoa funcionária seja contratada na Trybe (o objeto seja instanciado), seus atributos já sejam inicializados. Você deverá também implementar os métodos `Getter`s e `Setter`s, exceto para o atributo `cpf`, imutável, que deve ter somente o método `Getter`.

Requisitos:  
1 - Crie um construtor para a PessoaFuncionaria que receba o nome, CPF, endereço e salário.  
2 - Crie um método getter para o atributo nomeCompleto de PessoaFuncionaria.  
3 - Crie um método setter para o atributo nomeCompleto de PessoaFuncionaria.  
4 - Crie um método getter para o atributo cpf de PessoaFuncionaria.  
5 - Crie um método getter para o atributo endereco de PessoaFuncionaria.  
6 - Crie um método setter para o atributo endereco de PessoaFuncionaria.  
7 - Crie um método getter para o atributo salario de PessoaFuncionaria.  
8 - Crie um método setter para o atributo salario de PessoaFuncionaria.  

  Por exemplo,  
  
Se a nova pessoa contratada for:

- Nome: Maria da Silva;
- CPF: 158.699.457-31;
- Endereço: Rua da Aurora, 118;
- Salário: 15000.

Então o método `Getter` do atributo `cpf` deve retornar 158.699.457-31. Se executarmos o método `Setter` do atributo `salario` passando o valor 20000, o método `Getter` do atributo `salario` deve retornar 20000.0 (já que é do tipo `double`).

</details>

## Exercício 2. Conta Poupança

<details>
  <summary>Descrição</summary><br />

Suponha que você está trabalhando em uma equipe responsável pela construção de um sistema bancário e deve desenvolver a classe que representa a conta poupança. Como missão dada é missão cumprida, implemente a classe `ContaPoupanca` do pacote `com.trybe.acc.contapoupanca`, que deve contemplar os seguintes aspectos:

- Atributos:
    - `saldo`: atributo do tipo `double` para armazenar o valor em dinheiro que a conta possui;
    - `titularConta`: atributo do tipo `String` para armazenar o nome da pessoa portadora da conta.

- Métodos:
    - `depositar`: esse método é responsável por receber um valor do tipo `double` e somá-lo ao saldo da conta;
    - `sacar`: esse método é responsável por receber um valor do tipo `double` e subtraí-lo do saldo da conta;
    - `mostrarSaldo`: esse método deve retornar um valor do tipo `double` representando o saldo da conta.
    - `mostrarTitularConta`: esse método deve retornar o nome da pessoa titular da conta.

Essa conta poupança tem duas restrições a serem levadas em conta no seu projeto:

- ela só pode ser aberta se um depósito for feito no momento da sua abertura;
- ela deve ter o nome da pessoa titular da conta.

Requisitos:  
1 - Criar uma classe ContaPoupanca  
2 - Implementar o método 'depositar'  
3 - Implementar o método 'sacar'  
4 - Implementar o método 'mostrarSaldo'  
5 - Implementar o método 'mostrarTitularConta'  

**Dica: use o construtor para adicionar o valor do depósito inicial ao saldo na abertura da conta e o nome da pessoa titular da conta.**

  Por exemplo,  
  
Considerando que uma pessoa abra a conta poupança com o valor inicial de R$ 50, cada método deve se comportar da seguinte maneira:

- `depositar`: supondo que o saldo da conta seja R$ 50 e na chamada do método `depositar` seja passado o valor de R$ 100 como argumento, o método deve somar o valor 100 ao saldo, fazendo o valor do saldo ser atualizado para 150;
- `sacar`: supondo que o saldo da conta seja R$ 50 e na chamada do método `sacar` seja passado o valor de R$ 30 como argumento, o método deve subtrair o valor 30 do saldo, fazendo o valor do saldo ser atualizado para 20;
- `mostrarSaldo`: supondo que o saldo da conta seja R$ 50, então o retorno desse método deve ser 50.
- `mostrarTitularConta`: supondo que o nome da pessoa dona da conta seja Carla Pereira, esse método deve retornar um valor do tipo `String` contendo `Carla Pereira`.
</details>

## Exercício 3. Pessoa Usuárias

<details>
  <summary>Descrição</summary><br />
  Na ACME Companhia Limitada os nomes das contas de pessoas usuárias são gerados com o nome e o sobrenome da pessoa separados por um ponto. Crie um sistema que gere o nome de uma pessoa usuária seguindo os seguintes critérios:

  1. uma classe `Pessoa` que possui dois atributos **protegidos**, _nome_ e _sobrenome_.
  2. uma classe `PessoaUsuaria` que deve ter um construtor passando _nome_ e _sobrenome_.
  3. na classe `PessoaUsuaria` deve-se adicionar uma função `getPessoaUsuaria()`, que não recebe nenhum parâmetro, e retorna o nome.sobrenome.

    Requisitos:  
    1 - Valida se usuário executa regra  
    2 - Valida se usuário é sub-classe de pessoa  
    3 - Valida se usuário executa regra com nome nulo  
    4 - Valida se usuário executa regra com sobrenome nulo  
    5 - Valida se usuário executa regra com nome vazio  
    6 - Valida se usuário executa regra com sobrenome vazio  
    7 - Valida se método implementa na sub-classe  
    8 - Valida se método implementado tem nome correto  
    9 - Valida se atributos estão declarados  
    10 - Valida se atributos declarados tem nomes corretos  
  
Por exemplo,  
  
  Iniciei a classe `new PessoaUsuaria("bruce", "wayne")`, então a saída da função `getPessoaUsuaria()` deve ser `bruce.wayne`.

  Iniciei a classe `new PessoaUsuaria(null, "wayne")`, então a saída da função `getPessoaUsuaria()` deve ser `Pessoa usuária inválida`. O mesmo deve ocorrer se o sobrenome for nulo.

  Iniciei a classe `new PessoaUsuaria("", "wayne")`, então a saída da função `getPessoaUsuaria()` deve ser `Pessoa usuária inválida`. O mesmo deve ocorrer se o sobrenome for vazio.


</details>