# :pencil: React Router



Os requisitos dos exercícios são:

## Pokédex - React Router

O desafio de hoje é incrementar uma aplicação de Pokédex utilizando React Router. Você terá acesso a um repositório com uma aplicação React funcionando, onde é exibido um card com informações de um Pokémon e um botão para navegar entre uma lista de Pokémon. Também é possível filtrar por tipos específicos.

Além dessas funcionalidades que já existem, você terá que adicionar novas rotas na aplicação, para que seja possível visualizar mais informações de cada Pokémon e até favoritar os Pokémon que você mais gosta.

### 1 - Criar duas rotas para a aplicação, a rota principal `/` e a rota `/about`

<details>
  <summary>Crie as duas primeiras rotas para a aplicação</summary><br />

- A rota `/` deve renderizar somente o componente `<Pokedex />`.
- Crie um componente chamado `About` e coloque um título `h1` com o texto `About Pokédex`.
- Crie a rota `/about` e renderize somente o componente `<About />`

</details>

<details>
  <summary>👀 De olho nas dicas</summary><br />

- As rotas devem ficar no componente `<App />` envolvidas pelo `Switch`;
- Utilize os atributos `render` e `exact` do **_Route_**.

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Se, ao entrar na rota `/`:
  - é renderizado uma tag `h1` com o texto `Pokédex`.
  - as informações do primeiro Pokémon da lista são renderizadas.
- Se, ao entrar na rota `/about`, é renderizado uma tag `h1` com o texto `About Pokédex`.

</details>

</details><br>

### 2 - Criar a rota para a página que exibirá mais informações do Pokémon, adicionando o link para essa rota no card que exibe o Pokémon na página inicial

<details>
  <summary>Crie rota para a página que exibirá mais informações do Pokémon</summary><br />

- Crie a rota `/pokemon/{id}`, onde `{id}` será o `id` do Pokémon selecionado. Cada Pokémon possui um `id` na Pokédex e podemos usar essa informação como parâmetro de _URL_ para permitir que a aplicação consiga acessar detalhes de um pokémon específico.

> Por exemplo: o id do pokémon `Pikachu` é `25`.Com isso, para acessar a página de informações do `Pikachu`, devemos acessar a rota `/pokemon/25`.

- Crie o componente `<PokemonDetails />` e faça com que ele seja renderizado quando a rota `/pokemon/{id}` for acessada.
- Dentro do componente `<PokemonDetails />`, recupere a informação do parâmetro `id` passado pela _URL_.
- Exiba um título `h1` com o  texto `{nome-do-pokemon} details`, onde `nome-do-pokemon` é o nome do Pokémon que possui o `id` passado como parâmetro pela _URL_.

</details>

<details>
  <summary>👀 De olho nas dicas</summary><br />

- Utilize as _props_ para passar o parâmetro `id` pelos componentes;
- A lista de Pokémon está no arquivo `src/data.js` e você pode passá-la como _prop_ para o componente `<PokemonDetails />`.

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Se, ao acessar a rota `/pokemon/25`, existe um título `h1` com o texto `Pikachu details`.
- Se, ao acessar a rota `/pokemon/65`, existe um título `h1` com o texto `Alakazam details`.

</details>

</details><br>

### 3 - Criar um link para o Pokémon que está sendo exibido na página inicial, direcionando a pessoa usuária para a página de detalhes desse Pokémon. Na página de detalhes, exiba todas as informações do respectivo Pokémon

<details>
  <summary>Crie um link para a página de detalhes do Pokémon que está sendo exibido</summary><br />

- Na página inicial, adicione um link dentro do card de informações do Pokémon que está sendo exibido. Este link deve direcionar para a página de informações do respectivo Pokémon por meio da rota `/pokemon/{id}`.
- O link deve ter o texto `Details`.
- Ao entrar na página do respectivo Pokémon, todas as informações do Pokémon devem ser exibidas:
  - o nome do Pokémon.

 > Observação: no requisito anterior foi pedido para que o nome fosse renderizado como título da página, e nesse requisito o nome precisa ser renderizado novamente junto com o restante das informações;

- o tipo do Pokémon;
- o peso e a respectiva unidade de medida;  
- a informação resumida sobre o Pokémon, essa  informação está presente na chave `summary` em cada objeto da lista de Pokémon.
- o(s) mapa(s) que mostra(m) as possíveis localizações do Pokémon, seu nomes e imagens. Informações presentes nas chaves `location` e `map`, dentro de um _array_ na chave `foundAt` presente em cada objeto da lista de Pokémon;
- cada mapa deve ser renderizado com dois elementos: uma imagem, que deve ter o atributo `src` prrenchido com o valor da propriedade  `map`; e um elemento de texto que deve renderizar o valor da propriedade `location`.

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Se na página inicial:
  - existe um link que direciona para página de detalhes do Pokémon que está sendo exibido.
  - o link para página de detalhes direciona corretamente, mesmo após alterar o Pokémon que está sendo exibido.
- Se na página de detalhes, todas as informações do Pokémon estão sendo renderizadas.

</details>

</details><br>
