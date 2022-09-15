# :pencil: JavaScript ES6 - let, const, arrow functions e template literals

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre como criar _layouts_ específicos para diferentes tamanhos de tela. Para isso deveria utilizar-se do **_media query_** para mostrar  diferentes _layouts_ em tamanhos de tela grande (_desktops_ e _laptops_), média (_tablets_) e pequena (smartphones) para que o _layout_ não pareça "estranho" em telas muito estreitas, ou muito largas.

Os requisitos dos exercícios são:

## Parte I

### Exercício 1

Altere o tipo das variáveis(`var`) para `let` ou `const` para que respeitem o escopo em que foram declaradas, e altere a função utilizando `arrow function` e `template literals`.

- Modifique a estrutura da função para que ela seja uma `arrow function`;
- Modifique as variáveis para que respeitem o escopo onde estão declaradas;
- Modifique as concatenações para `template literals`.

Copie o código abaixo:

```
  function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);
```

### Exercício 2

Crie uma função que retorne um array em ordem crescente.

Copie o código abaixo:

```
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = () => {

  // Seu código aqui.

  console.log(oddsAndEvens); // será necessário alterar essa linha 😉
```

- Crie uma função que faça com que o array `oddsAndEvens` fique em ordem crescente;
- Utilize `template literals` para que a chamada `console.log(<seu código>oddsAndEvens<seu código>);` retorne a frase “Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!”.
- _Bônus (opcional):_ tente fazer o mesmo exercício utilizando o método `array.sort()`. **Spoiler**: É possível realizar uma função que ordene qualquer array de números.

