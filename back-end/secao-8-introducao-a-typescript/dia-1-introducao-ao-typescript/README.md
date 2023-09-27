# :pencil: Introdução ao TypeScript

O objetivo dos exercícios desse dia foi dar os primeiros passos em **TypeScript**, aprendendo a como utilizá-lo e por que ele tem se tornado cada vez mais relevante no mundo da programação. Para isso deveria definir o que é o **TypeScript**, relacionar **TypeScript** e **JavaScript**, descrever o que é **tipagem**, distinguir **compilador** de **transpilador**, compilar o código **TypeScript** em código **JavaScript**, identificar e implementar os principais tipos do **TypeScript**, utilizar **union types** para fazer combinações de tipo, utilizar **type aliases** e distinguir quando usar **inferência de tipo** e **type annotation**.

Os requisitos dos exercícios são:

Antes de começar, crie uma pasta e, dentro dela, crie um pacote Node.js com o `npm init` chamado `my-ts-scripts`. Realize os exercícios dentro desse pacote.

## Configuração Inicial

```
mkdir my-ts-scripts && cd my-ts-scripts
```

```
npm init -y
```

```
npm install -D -E @tsconfig/node16@1.0.3 @types/node@16.18.23 typescript@4.4.4
```

```
touch tsconfig.json
```

```
// ./tsconfig.json
{
  "extends": "@tsconfig/node16/tsconfig.json", // estendemos a configuração base para o Node 16
  "compilerOptions": {
    "outDir": "./dist" // pasta onde nossos arquivos compilados serão salvos
  }
}
```

## Exercício 1

Temos uma API que começou a ter diversos erros e apresentar bugs frequentes. Como solução, o CTO do time, avaliou que utilizar o Typescript em suas funções, diminuiria um pouco desses problemas.

Para isso você foi direcionado a modificar as funções abaixo, escritas em Javascript, para que fossem tipadas e executassem sem erros no compilador de Typescript:

**Observação**: Não é necessário alterar o valor dos parâmetros passados.

**Dica**: utilize o [Typescript playground](https://www.typescriptlang.org/play?#code/Q) para testar o comportamento de cada função.

### Função 1

```
const numberInput = 7;

const isItAPrime = (param) => {
  for (let i = 2; i < param; i++)
    if (param % i === 0) {
      return false;
    }
  return param > 1;
};

isItAPrime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);
```

### Função 2

```
// Essa função é responsável por validar se o formato do e-mail está correto.

const emailInput = 'email@email.com';

const validateEmailFormat = (param) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(param);
};

console.log(validateEmailFormat(emailInput))
```

### Função 3

```
// Essa função recebe uma lista e ordena seu conteúdo de forma crescente.

const numberList = [10, 5, 18, 2, 8, 23];

const sortInput = (param) => {
  return param.sort(function(a, b){return a-b});
};

console.log(sortInput(numberList));
```

### Função 4

**Dica**: leia a [documentação](https://www.typescriptlang.org/docs/handbook/2/objects.html)

```
// Essa função é responsável por receber um objeto e formar uma frase utilizando as chaves do mesmo.
const peopleInput = {
  name: 'Rui',
  age: 23,
};

const createSimpleSentence = (param) => {
  return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
}

console.log(createSimpleSentence(peopleInput));
```

### Função 5

**Dica**: essa função poderá receber um parâmetro com dois tipos diferentes.

```
// Essa é uma função que verifica se a idade passada é maior ou menor de 18 anos.
const ageInput = 15;

const isOfLegalAge = (param) => {
  return !!param
}

ageInput >= 18
  ? console.log(isOfLegalAge('true'))
  : console.log(isOfLegalAge(false));
```

## Exercício 2

Crie um script para converter unidades de medida de comprimento:

1. Esse script deverá se chamar `length.ts`;
2. Ele deverá possuir uma função chamada `convert` que recebe como parâmetro:
  - valor - number
  - unidade base - string
  - unidade para a conversão - string

**Tabela de conversão**:

| Nome | Símbolo | Valor     |
|------|---------|-----------|
| Quilômetro | km | 1000m |
| Hectômetro | hm | 100m |
| Decâmetro | dam | 10m |
| Metro | m | 1m |
| Decímetro | dm | 0,1m |
| Centímetro | cm | 0,01m |
| Milímetro | mm | 0,001m |

## Exercício 3

Crie um script para converter unidades de medida de massa:

1. Esse script deverá se chamar `mass.ts`;
2. Ele deverá possuir uma função chamada `convert` que recebe como parâmetro:
  - valor - number
  - unidade base - string
  - unidade para a conversão - string

**Tabela de conversão**:

| Nome        | Símbolo | Valor   |
|-------------|---------|---------|
| Quilograma  | kg      | 1000g   |
| Hectograma  | hg      | 100g    |
| Decagrama   | dag     | 10g     |
| Grama       | g       | 1g      |
| Decigrama   | dg      | 0,1g    |
| Centigrama  | cg      | 0,01g   |
| Miligrama   | mg      | 0,001g  |

## Exercício 4

Crie um script para converter unidades de medida de capacidade:

1. Esse script deverá se chamar `capacity.ts`;
2. Ele deverá possuir uma função chamada `convert` que recebe como parâmetro:
  - valor - number
  - unidade base - string
  - unidade para a conversão - string

**Tabela de conversão**:

| Nome | Símbolo | Valor |
|------|---------|-------|
| Quilolitro | kl | 1000l |
| Hectolitro | hl | 100l |
| Decalitro | dal | 10l |
| Litro | l | 1l |
| Decilitro | dl | 0,1l |
| Centilitro | cl | 0,01l |
| Mililitro | ml | 0,001l |

## Exercício 5

Crie um script para converter unidades de medida de área:

1. Esse script deverá se chamar `area.ts`;
2. Ele script deverá possuir uma função chamada `convert` que recebe como parâmetro:
  - valor - number
  - unidade base - string
  - unidade para a conversão - string

**Obs**: atente-se à conversão de metros quadrados, que deve ser realizada de 100 em 100.

**Tabela de conversão**:

| Nome                | Símbolo | Valor       |
|---------------------|---------|-------------|
| Quilômetro quadrado  | km²     | 10⁶ m²      |
| Hectômetro quadrado  | hm²     | 10⁴ m²      |
| Decâmetro quadrado   | dam²    | 10² m²      |
| Metro quadrado       | m²      | 1m²         |
| Decímetro quadrado   | dm²     | 10⁻² m²     |
| Centímetro quadrado  | cm²     | 10⁻⁴ m²     |
| Milímetro quadrado   | mm²     | 10⁻⁶ m²     |

## Exercício 6

Crie um script para converter unidades de medida de volume:

1. Esse script deverá se chamar `volume.ts`;
2. Ele deverá possuir uma função chamada `convert` que recebe como parâmetro:
  - valor - number
  - unidade base - string
  - unidade para a conversão - string

**Obs**: atente-se à conversão de metros cúbicos, que deve ser realizada de 1000 em 1000.

**Tabela de conversão**:

| Nome                | Símbolo | Valor        |
|---------------------|--------|--------------|
| Quilômetro cúbico    | km³    | 10⁹ m³      |
| Hectômetro cúbico    | hm³    | 10⁶ m³      |
| Decâmetro cúbico     | dam³   | 10³ m³      |
| Metro cúbico         | m³     | 1m³         |
| Decímetro cúbico     | dm³    | 10⁻³ m³     |
| Centímetro cúbico    | cm³    | 10⁻⁶ m³     |
| Milímetro cúbico     | mm³    | 10⁻⁹ m³     |

## Exercício 7

Vamos tornar nossos scripts de unidades de medida mais interativos! Vamos adicionar input de quem usa o script. Para isso, utilize o pacote `readline-sync`, [documentação](https://www.npmjs.com/package/readline-sync#utility_methods).

Em cada script, crie uma função chamada `exec` que:

1. Capta as entradas da pessoa usuária via terminal;
2. Chama a função de conversão passando as entradas da pessoa usuária como parâmetro;
3. Exibe uma mensagem com o resultado. Ex: “1km é igual a 1000m.”;
4. Não se esqueça de chamar a função `exec();` ao final do script.

## Exercício 8

Crie um arquivo `index.ts` que pergunta qual conversão a pessoa usuária deseja realizar, e chama o script correspondente:

1. O script deve ser acionado por meio do comando `npm start` no `package.json`;
2. Utilize o `readline-sync` para realizar o input de dados;
3. Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis;
4. Você pode utilizar o `require` para executar o script em questão.

## Exercício Bônus

Temos um array `characters` que agrupa dados de jogadores em um MMORPG (“Jogo de representação de papéis online, multijogador em massa”) usado para manter o registro de uma guilda (grupo de jogadores) no acompanhamento da evolução do grupo. Esses dados foram adicionados sem se atentar para sua correta tipagem, o que pode ocasionar um bug no futuro. Faça a correta tipagem do array por meio do tipo `Character` e da função usada para imprimir as informações básicas de todos os jogadores.

**Dica**: utilize a [documentação](https://www.typescriptlang.org/docs/handbook/advanced-types.html) para realizar essa atividade.

```
type Character = any;

const characters: any = [
  {
    nickname: 'xKillerx',
    class: 'warrior',
    stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
    createdAt: new Date('2003-10-1'),
  },
  {
    nickname: 'jainaProud',
    class: 'mage',
    stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
    createdAt: new Date('2003-10-2'),
  },
  {
    nickname: 'catIn',
    class: 'hunter',
    stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
    createdAt: new Date('2003-10-15'),
  },
];

function printCharacter(character: any, index: number) {
  const { nickname, class: cls, createdAt } = character;

  console.log(`\n\n===== Character: ${index + 1} ========`);
  console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}

characters.forEach(printCharacter);
```
