# :pencil: JavaScript ES6 - Fluxo de exceção e Objetos

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre algumas features do **ES6**, como let, const, arrow functions, template literals e operador ternário. A utilização desses recursos resulta na escrita de códigos mais limpos e concisos visando identificar a presença desses elementos ao revisar códigos de outras pessoas.

Os requisitos dos exercícios são:

## Parte I - Criando fluxo de exceção

Copie e cole o código abaixo no seu editor de texto:

```
<!DOCTYPE html>
<html lang='pt-BR'>
<head>
  <meta charset='UTF-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Calculadora</title>
</head>
<body>
  <p>Informe dois números para realizar a soma:</p>
  <label for='value1'>Valor 1:</label>
  <input type='text' id='value1'>
  <label for='value2'>Valor 2:</label>
  <input type='text' id='value2'>
  <button id='button'>Somar</button>
  <p id='result'></p>
  <script>
    function sum() {
      const value1 = document.getElementById('value1').value;
      const value2 = document.getElementById('value2').value;
      const result = Number(value1) + Number(value2);
      document.getElementById('result').innerHTML = `Resultado: ${result}`;
      document.getElementById('value1').value = '';
      document.getElementById('value2').value = '';
    }
    window.onload = () => {
      const button = document.getElementById('button');
      button.addEventListener('click', sum);
    }
  </script>
</body>
</html>
```

Tire um tempinho para entender o código acima:

- A aplicação pede à pessoa usuária que informe dois números para realizar uma soma. Esses números são inseridos através dos `inputs`;
- Ao clicar o botão, a função `sum` é chamada, capturando o valor escrito nos `inputs` e realizando a operação. Antes, é necessária a conversão do valor usando o `Number()`, pois ele chega à função em forma de `string`, existem outras formas de converter uma `string` em um número, como o `parseInt()` e o `parseFloat()`;
- Ao final, a função `sum` imprime o valor em um parágrafo e limpa os `inputs` para que a pessoa usuária possa inserir novos valores.

Aparentemente está tudo funcionando, mas a aplicação não possui fluxo de exceção. Ou seja, caso ocorra um erro, eles não serão tratados. Que tal resolver isso?

- Crie erros personalizados.
- Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?
- Utilize o `throw new Error` e o bloco `try/catch`.
- Evite funções que tenham muitas responsabilidades distintas.
- Caso a pessoa usuária nao preencha nenhum `input`, ou preencha apenas um `input`, lance um erro.
- Caso os valores inseridos nos `inputs` pela pessoa usuária não sejam números, lance um erro. Você pode fazer essa verificação utilizando a função `isNan()`.
- Adicione o texto dos erros no parágrafo com id `result`, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!
- Utilize o `finally` para apagar os valores dos `inputs` ao final do bloco `try/catch`.

  > _Dica: Cuidado ao utilizar o `isNaN` pois valores considerados `falsy` são transformados em 0, podendo assim gerar um falso positivo. E lembre-se que, no javascript para se separar a parte inteira da decimal de um número, você deve utilizar o `.` . Exemplo:_ **1.5** _com ponto, ao invés de_ **1,5** _com vírgula._

## Parte II - Pedido de clientes

Para os exercícios a seguir, use o seguinte código:

```
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.

};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

};

orderModifier(order);
```

Agora você vai fazer alguns exercícios.

- Complete a função `customerInfo()` para que seu retorno seja similar a “Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701”.

  > _💡 Note que o parâmetro da função já está sendo passado na chamada da função._
  
- Complete a função `orderModifier()` para que seu retorno seja similar a “Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.”
  - Modifique o nome da pessoa compradora.
  - Modifique o valor total da compra para R$ 50,00.
