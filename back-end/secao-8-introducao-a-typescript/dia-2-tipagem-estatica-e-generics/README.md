# :pencil: Tipagem Estática e Generic



Os requisitos dos exercícios são:

## Classes, Interfaces e Generics

### Exercício 1

Crie uma classe `Car` cujo objeto representará um carro.

_Propriedades_:

- Deve conter uma propriedade do tipo `string` chamada `brand` que representa a marca.
-Deve conter uma propriedade do tipo `string` chamada `color` que representa a cor.
-Deve conter uma propriedade do tipo `number` chamada `doors` que representa a quantidade de portas.

_Comportamentos_:

- Deve conter um método chamado `honk` que aciona a buzina do carro.
- Deve possuir um método chamado `turnOn` que liga o carro.
- Deve possuir um método chamado `turnOff` que desliga o carro.
- Deve possuir um método chamado `speedUp` que acelera o carro.
- Deve possuir um método chamado `speedDown` que reduz a velocidade do carro.
- Deve possuir um método chamado `stop` que para o carro.
- Deve possuir um método chamado `turn` que recebe uma direção do tipo `string` e vira o carro.

### Exercício 2

Vamos agora utilizar a classe `Car` que criamos no exercício anterior. Uma pessoa motorista de aplicativo fará uma viagem para pegar sua nova pessoa passageira. Ela então entra em seu volkswagen gol prata de 4 portas, liga seu carro e começa o trajeto:

- Siga em frente;
- Em 600 metros vire a esquerda;
- Vire a esquerda;
- Em 200 metros na rotatória pegue a segunda saída a direita;
- Mantenha em frente pelos próximos 1,2 quilômetros;
- Em 300 metros vire a direita;
- Vire a direita;
- Em 400 metros você chegará ao seu destino;
- Você chegou ao seu destino.

Pronto. A pessoa motorista para, a pessoa passageira entra pela porta de trás do lado do carona e a viagem continua.

- Siga em frente;
- Em 300 metros vire a direita;
- Vire a direita;
- Mantenha em frente pelos próximos 2 quilômetros;
- Em 200 metros vire a esquerda;
- Vire a esquerda;
- Em 400 metros vire a direita;
- Vire a direita;
- Em 100 metros você chegará ao destino.
- Você chegou ao destino.

A pessoa passageira desce do veículo e a pessoa motorista segue para a próxima corrida.

Agora você deve desenvolver um script capaz de automatizar todo o cenário descrito.

### Exercício 3

Crie uma interface que represente uma pizza. Ela deve conter:

- Uma propriedade do tipo string chamada `flavor` que representa o sabor.
- Uma propriedade chamada `slices` cujo tipo é a união entre os possíveis números de fatias da pizza.
  - O número de fatias pode ser 4, 6 ou 8;
  - Utilize um `type alias` para armazenar o tipo dessa propriedade.

**a)** Crie uma pizza sabor Calabresa de 8 fatias;

**b)** Crie uma pizza sabor Marguerita de 6 fatias;

**c)** Crie uma pizza sabor Nutella de 4 fatias.

### Exercício 4

Vamos agora estender nossa interface Pizza com novos tipos de pizza. São eles:

- Pizza Comum - seus sabores são “Calabresa”, “Frango” e “Pepperoni”, podem ter 4, 6 ou 8 pedaços.
- Pizza Vegetariana - seus sabores são “Marguerita”, “Palmito” e “Cogumelo”, podem ter 4, 6 ou 8 pedaços.
- Pizza Doce - seus sabores são “Nutella”, “Goiabada com Queijo” e “Marshmallow”, podem ter somente 4 pedaços.
Você deve usar `type alias` e `type unions` para criar os possíveis sabores de cada tipo de pizza.

Agora crie:

- 3 pizzas do tipo comum;
- 2 pizzas do tipo vegetariana;
- 1 pizza do tipo doce.

### Exercício 5

Em **JavaScript**, temos a _High Order Function_ `filter`. Ela funciona da seguinte forma:

- Recebe como primeiro parâmetro um _array_ que pode ser de qualquer tipo;
- Recebe como segundo parâmetro uma função de _callback_;
- Retorna um novo _array_ removendo os itens que não atendem a condição da função de _callback_;
- A função de _callback_ recebe como primeiro parâmetro um item do tipo do _array_;
- A função de _callback_ pode receber como segundo parâmetro um _index_ do tipo inteiro;
- A função de _callback_ pode receber como terceiro parâmetro o próprio _array_;
- A função de _callback_ devolve um booleano.

Usando `generics` e os demais conceitos aprendidos em **TypeScript**, recrie a função `filter` e nomeie-a como `myFilter`.

## Sequelize com Typescript

### Instruções para a realização dos exercícios

Neste exercício vamos configurar o `Sequelize` em conjunto com a linguagem `Typescript` e praticar essa forma de acesso ao banco de dados.

#### Detalhes do projeto

1. Crie uma nova pasta e inicie um projeto node:

```
npm init -y
```

2. Instale as dependências de produção necessárias:

```
npm install sequelize@6.3 express@4.17
```

3. Instale as dependências de desenvolvimento necessárias:

```
npm i -D -E mysql2@2.3 sequelize-cli@6.2 @types/sequelize@4.28 typescript@4.4.4 @types/express@4.17 @types/node@16.18.23 ts-node@10.4
```

4. Crie o arquivo `tsconfig.json` na raiz do projeto e adicione o seguinte conteúdo:

> tsconfig.json

```
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./build",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

5. Crie o arquivo `.sequelizerc` na raiz do projeto e adicione o seguinte conteúdo:

> .sequelizerc

```
const path = require('path');

module.exports = {
  config: path.resolve(__dirname, 'build', 'database', 'config', 'database.js'),
  'models-path': path.resolve(__dirname, 'build', 'database', 'models'),
  'seeders-path': path.resolve(__dirname, 'src', 'database', 'seeders'),
  'migrations-path': path.resolve(__dirname, 'src', 'database', 'migrations'),
};
```

6. Inicie o sequelize com o comando:

```
npx sequelize-cli init
```

Esse comando vai gerar as pastas `build/database`, `src/database/migrations` e `src/database/seeders` dentro do seu projeto.

7. Crie o arquivo **`src/database/config/database.ts`** e coloque todas as configurações de acesso para garantir que tem um servidor MySQL rodando em seu projeto;

> src/database/config/database.ts

```
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'root',
  database: process.env.DB_NAME || 'books_api',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
};

export = config;
```

8. Crie o arquivo **`src/database/models/index.ts`** para gerar e exportar uma nova instância do `Sequelize`.

> src/database/models/index.ts

```
import { Sequelize } from 'sequelize';
import * as config from '../config/database';

export default new Sequelize(config);
```

9. Adicione ao arquivo `package.json` os scripts que vão servir auxiliar na execução dos exercícios.

> package.json

```
{
  ...

  "scripts": {
    "db:reset": "npx -y tsc && npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all",
    "start": "ts-node src/index.ts"
  },

  ...
}
```

O script `env $(cat .env) npm run db:reset` vai apagar e gerar um novo banco de dados com as `migrations` e `seeders` que você criou. O script `npm start` executará o arquivo `src/index.ts`. Além desse scripts, você pode executar outros comandos que achar necessário para realizar os exercícios. Agora vamos lá!

### 🚀 Exercício 1

Crie uma _migration_ chamada `create-authors` para criar uma tabela _`authors`_ com as seguintes colunas:

| Nome da coluna | Descrição                                                      |
| -------------- | -------------------------------------------------------------- |
| id             | Deve ser do tipo integer, não pode ser nula e deve ser a chave primária da tabela com auto incremento |
| name           | Deve ser do tipo string e não pode ser nulo                      |

> _Obs: o método `down` da migration deve ser capaz de remover a tabela. Obs 2: execute o comando `env $(cat .env) npm run db:reset` e verifique se a tabela foi criada antes de continuar para os próximos exercícios._

### 🚀 Exercício 2

Crie uma _migration_ chamada `create-genres` para criar uma tabela _`genres`_ com as seguintes colunas:

| Nome da coluna | Descrição                                                                 |
|----------------|---------------------------------------------------------------------------|
| id             | Deve ser do tipo integer, não pode ser nula e deve ser a chave primária da tabela com auto incremento |
| genre          | Deve ser do tipo string e não pode ser nulo                                 |

> Obs: o método `down` da migration deve ser capaz de remover a tabela. Obs 2: Execute o comando `npm run db:reset` e verifique se a tabela foi criada antes de continuar para os próximos exercícios.
> 👀 **De olho na dica**: Depois de terminar os três primeiros exercícios, criar seeds para as tabelas pode facilitar a resolução dos próximos exercícios.

### 🚀 Exercício 3

Crie uma _migration_ para criar uma tabela `books` com as seguintes colunas:

| Nome da coluna | Descrição |
| --- | --- |
| id | Deve ser do tipo integer, não pode ser nula e deve ser a chave primária da tabela com auto incremento |
| title | Deve ser do tipo string e não pode ser nulo |
| author_id | Deve ser do tipo integer, não pode ser nula e deve ser chave estrangeira da tabela (seu relacionamento é feito com o campo `id` da tabela `authors`) |
| genre_id | Deve ser do tipo integer, não pode ser nula e deve ser chave estrangeira da tabela (seu relacionamento é feito com o campo `id` da tabela `genres`) |

> _Obs: o método `down` da migration deve ser capaz de remover a tabela. Obs 2: Execute o comando `env $(cat .env) npm run db:reset` e verifique se a tabela foi criada antes de continuar para os próximos exercícios._

### 🚀 Exercício 4

Crie o _model_ `Author` com as configurações necessárias da tabela `authors`.

### 🚀 Exercício 5

Crie o _model_ `Book` com as configurações necessárias da tabela `books`.

> _De olho na dica👀: crie o relacionamento entre as tabelas `books` e `authors`._

### 🚀 Exercício 6

Crie um arquivo `src/index.ts` que retorne um array de objetos com as seguintes chaves:

- `author`: deve possuir o valor correspondente ao nome do autor;
- `totalBooks`: deve possuir o valor correspondente ao total de livros daquele autor.

> _A ordem dos objetos devem ser decrescente com base no valor de `totalBooks`; Os nomes dos autores não devem se repetir nos objetos._

Exemplo da saída:

```
[
  {
    author: nome_do_autor1,
    totalBooks: quantidade_de_livros_do_autor1,
  },
  {
    author: nome_do_autor2,
    totalBooks: quantidade_de_livros_do_autor2,
  },
    ...
]
```

> _De olho na dica👀: Para solucionar esse exercício é interessante buscar na documentação do sequelize sobre como especificar os atributos usando o `sequelize.fn` para fazer agregação._
