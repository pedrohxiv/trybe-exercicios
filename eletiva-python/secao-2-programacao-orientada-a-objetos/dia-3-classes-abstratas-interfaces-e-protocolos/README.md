# :pencil: Classes abstratas, interfaces e protocolos



Os requisitos dos exercícios são:

## Exercício 1

Você trabalha em uma empresa que desenvolve sistemas de gestão para empresas de diversos segmentos. Então, o seu gerente de projetos pediu a você que desenvolvesse uma classe abstrata chamada `Employee` que servirá de base para as classes `Developer`, `Analyst` e `Manager`. Nessa classe abstrata deverá conter um método abstrato chamado `calculate_bonus` a ser implementado nas classes filhas. Então, o método `calculate_bonus` deverá retornar o valor do salário do funcionário acrescido de um bônus, que precisa ser calculado da seguinte forma:

- Para o `Developer` o bônus será de 20% do salário;
- Para o `Analyst` o bônus será de 30% do salário;
- Para o `Manager` o bônus será de 40% do salário;
- Para as demais funções o bônus será de 10% do salário.

Crie uma função `main` que instancie um objeto de cada uma das classes filhas. Além disso, ele devem imprimir o valor do salário e da bonificação de cada um deles.

> _Formate a saída dos valores numéricos para que sejam impressos com duas casas decimais._

## Exercício 2

Agora, você deve criar um sistema para gerenciamento de serviços de entrega. Para isso, deverá ter uma interface chamada `Deliverable` que precisa conter um método chamado `delivery`. Essa interface vai ser implementada pelas classes `Mail` e `ShippingCompany`. O método `delivery` deverá receber como parâmetro um objeto da classe `Customer` e um objeto da classe `Address`. Além disso, o método precisa imprimir uma mensagem informando que o serviço foi entregue com sucesso.

➡️ Siga os passos a seguir para a construção.

- Crie uma classe chamada `Customer` com os atributos `name` e `phone`.
- Crie uma classe chamada `Address` com os atributos `street`, `number`, `city` e `state`.
- Crie uma classe chamada `Mail` que implemente a interface `Deliverable`.
- Crie uma classe chamada `ShippingCompany` que implemente a interface `Deliverable`.
- Crie uma função `main` que instancie um objeto de cada uma das classes `Mail` e `ShippingCompany`. Em seguida, crie um objeto da classe `Customer` e um objeto da classe `Address`. Por fim, utilize o método `delivery` dos objetos `Mail` e `ShippingCompany` passando como parâmetro o objeto `Customer` e o objeto `Address`.

> _Lembre-se de usar o `mypy` para verificar se a tipagem está correta._

## Exercício 3 – Protocolos

Implemente uma classe de protocolo para um sistema de mensagens que defina os métodos necessários para enviar e receber mensagens. Em seguida, faça classes para dois sistemas de mensagens diferentes que implementam o protocolo.

### Passos

Defina uma classe de protocolo chamada `MessagingProtocol` que defina os seguintes métodos:

- `send_message(to: str, message: str) -> bool:` envia uma mensagem para o destinatário especificado. Retorna _True_ se a mensagem for enviada com sucesso e _False_ caso contrário.
- `receive_message() -> Union[str, None]:` recebe uma mensagem, se houver disponível. Retorna a mensagem como uma _string_ ou _None_ se nenhuma mensagem estiver disponível.
- Implemente uma classe chamada `InMemoryMessaging` que implemente o protocolo `MessagingProtocol`. Nessa classe deve ser usada uma estrutura de dados na memória (por exemplo, um dicionário) para armazenar mensagens. Você pode usar a classe `queue.Queue` para implementar uma fila de mensagens simples.
- Implemente uma classe chamada `FileMessaging` que implemente o protocolo `MessagingProtocol`. Essa classe deve usar uma abordagem baseada em arquivo para armazenar mensagens. Você pode usar a função interna `open()` para criar e manipular arquivos.
- Teste as classes `InMemoryMessaging` e `FileMessaging` criando instâncias de cada classe e usando os métodos `send_message()` e `receive_message()`.

> _Lembre-se de usar o `mypy` para verificar se a tipagem está correta._
