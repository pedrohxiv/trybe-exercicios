# :pencil: Polimorfismo

O objetivo dos exercícios desse dia foi aprender sobre o quarto e último pilar da POO: o **polimorfismo**. Com ele eu consigo garantir que classes distintas possuam determinados métodos implementados, mas que não necessariamente se comportem da mesma forma. Além disso, você aprendi sobre métodos e classes abstratas, bem como métodos e atributos estáticos. Para isso deveria descrever, como pilar da Programação Orientada a Objetos, o **Polimorfismo**: múltiplas formas de se implementar um método descrito em uma interface, descrever **Classe Abstrata** como uma classe que não pode ser instanciada, devendo ser usada apenas por suas **Classes Herdeiras**, definir **Métodos Abstratos**, ou **Funções Abstratas** e implementar **Métodos Estáticos** para Classes em TypeScript.

Os requisitos dos exercícios são:

> _🚀 Se liga nesse foguete!_
> _Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação, mas fique de olho nesses! 👀_

**Importante**: Quando quisermos rodar o nosso código, sem a necessidade de transpilar nosso código, podemos rodar o seguinte comando:

```
npx ts-node ./src/index.ts
```

Nos exercícios de hoje vamos criar um sistema capaz de gerenciar reservas de diferentes quadras de um clube. Para isso, primeiro cada tipo de quadra vai ser criado no sistema do clube.

Para isso, precisamos deixar os seguintes arquivos prontos:

```
└── meu-projeto/
    ├── src/
    │   └── Clube.ts
    │   └── Quadra.ts
    │   └── normas/
    │       └── normasDeUso.ts
```

Antes de tudo, na raiz de seu projeto, crie o arquivo `tsconfig.json` com o seguinte conteúdo:

```
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "typeRoots": [
      "src/@types",
      "./node_modules/@types"
    ],
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

- Em `src` crie um diretório chamado `normas` e um arquivo `normasDeUso.ts` que armazenará diferentes tipos de regras de utilização de quadras.

```
// src/normas/normasDeUso.ts
const normas = {
  tenis: {
    piso: 'saibro',
    dupla: true,
  },
  futebol: {
    chuteira: 'trava',
  },
};

export default normas;
```

- Em `src` crie um arquivo `Quadra.ts` que será implementado ao decorrer dos exercícios.

```
// src/Quadra.ts
class Quadra { }

export default Quadra;
Em src crie um arquivo Clube.ts que será a classe responsável por armazenar as quadras do nosso sistema.
Copiar
// src/Clube.ts
import Quadra from './Quadra';

class Clube {
  private quadras: Quadra[] = [];

  public adicionarQuadra(quadra: Quadra) {
    this.quadras.push(quadra);
  }

  public buscarQuadra<T extends Quadra>(index: number): T {
    return this.quadras[index] as T;
  }
}

export default Clube;
```

## Exercício 1

Agora vamos criar uma interface _IAgenda_, que será usada para definir o padrão dos agendamentos das quadras. Para isso:

- Crie a interface _IAgenda_:
  - deve ser criada no caminho **src/interfaces/IAgenda.ts**,
  - IAgenda que deve receber `um` parâmetro `genérico` do tipo `T`,
  - IAgenda deve possuir 3 atributos:
    - protocolo do tipo `string`;
    - data do tipo `Date`;
    - regras do tipo `T`.

## Exercício 2

Crie a classe Quadra em `src/Quadra.ts`, que não pode ser instanciada (**classe abstrata**). Ela deve possuir um método abstrato `reservar` que recebe um parâmetro do tipo `Date` e que retorna um atributo do tipo _IAgenda_.

## Exercício 3

Agora crie um interface chamada _IFutebol_. Ela será usada para implementar as regras da classe que iremos utilizar no exercício 4. A interface _IFutebol_:

- deve ser criada no caminho **src/interfaces/IFutebol.ts**,
- deve possuir uma chave chuteira que será do tipo _string. spoiler: aqui serão guardadas as regras referente a chuteira que pode ser usada na Quadra de Futebol_

## Exercício 4

Como você já criou a classe abstrata _Quadra_ e a interface _IFutebol_, agora você deve criar a classe _QuadraFutebol_, essa classe deverá:

- ser criada no caminho **src/QuadraFutebol.ts**,
- extender a classe abstrata _Quadra_;
- implementar o método **reservar**, o tipo que esse método recebe deverá ser a interface **IFutebol** que você criou no exercício anterior.
- retornar o método de **reservar** com a seguinte resposta:

```
{
  // protocolo é o "id" da reserva, gere de forma aleatória
  protocolo: 'q39tgorea9',
  date: '2022-11-03T17:53:24.393Z',
  regras: { chuteira: 'cravo' }
}
```

## Exercício 5

Agora no seu arquivo **src/index.ts**:

- instancie a classe **Clube**,
- instancie a classe **QuadraFutebol**,
- adicione a classe que você acabou de instanciar (classe **QuadraFutebol**), ao clube, com o método _adicionarQuadra_
- Com sua quadra adicionada ao clube, você já pode reservar essa quadra na data que você quiser. Chame o método _reservar_ da classe _QuadraFutebol_, com a data que você quer jogar uma bolinha com as pessoas que você gosta.
- Imprima no console o resultado da reserva da quadra.

## Exercício 6

Agora que você já sabe como uma nova quadra é criada no nosso clube, repita esse processo e crie uma quadra de tênis. Essa quadra deverá:

- ser criada no caminho **src/QuadraTenis**
- depois de ser criada, deverá ser instanciada e ser adicionada às quadras do nosso clube.
_dica: não se esqueça de criar uma interface antes de construir essa classe. Da mesma forma que foi feito na classe_ **QuadraFutebol**
