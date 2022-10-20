# :pencil: Componentes React



Os requisitos dos exercícios são:

## Pokédex - React Components

Você vai implementar de forma simplificada uma [Pokédex](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex)! Para os que não estão familiarizados com o universo `Pokémon`, a `Pokédex` é uma enciclopédia de todos os pokémons na natureza.

### 1. Crie o componente `<Pokedex />`

<details>
  <summary>Este componente deverá renderizar um título e uma <code>ul</code></summary><br />

  - Este componente deverá: 
    - ser criado dentro da pasta `src/components`.

    - conter uma tag `h1` com o texto `Pokédex`.
  
    - conter uma tag `ul`. Por enquanto, essa lista estará vazia.
  
  - Renderize esse componente dentro do `App.js`.
</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Será validado se: 
    - uma tag `h1` com o texto `Pokédex` é renderizado dentro do componente `<Pokedex />`.
  
    - uma tag `ul` é renderizada dentro do componente `<Pokedex />`.
  
    - o componente `<Pokedex />` é renderizado dentro do `App.js`.

</details>

---

### 2. Crie o componente `<Pokemon />`

<details>
  <summary>Este componente deverá renderizar as informações de um pokémon</summary><br />
  
  - Ele deve ser criado dentro da pasta `src/components`.
  
  - Este componente deverá : 
    - receber uma `prop` chamada `pokemon`, que será um objeto com as informações de um Pokémon, como o exemplo mostrado abaixo:
    ```
    {
      id: 25,
      name: 'Pikachu',
      type: 'Electric',
      averageWeight: {
        value: 6.0,
        measurementUnit: 'kg',
      },
      image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
      moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
    }
    ```

    - conter uma tag `li` que envolva todo seu conteúdo.
  
  - Este componente deverá renderizar as seguintes informações (que estão dentro do objeto recebido via `props` chamada `pokemon`): 
    - o nome do Pokémon;
    - o tipo do Pokémon;
    - o peso médio do Pokémon, acompanhado da unidade de medida usada. Por exemplo: "20 kg";
    - a imagem do Pokémon.
  
  - A imagem deve conter o atributo `alt` com o valor do nome do Pokémon.
</details>


<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Será verificado se o: 
  
    - componente possui a tag `li` envolvendo seu conteúdo.
  
    - nome do Pokémon passado via `props` é renderizado.
  
    - tipo do Pokémon passado via `props` é renderizado.
  
    - peso médio do Pokémon e a unidade de medida passados via `props` serão renderizados.
  
  - Será validado se a imagem do pokémon passado via `props` é renderizada.
  
  - Será validado se a imagem do pokémon possui o atributo `alt` com o nome do pokémon passado via `props`.
</details>

---

### 3. Renderize uma lista com as informações de cada Pokémon

  <details>
    <summary>Renderize uma lista com as informações dos Pokémon dentro do componente <code>&lt;Pokedex /&gt;</code></summary>
  
  - O componente `<Pokedex/>` deve receber a lista de Pokémon através de uma `props` chamada `pokemonList`. 
  > Adicione essa `props` ao componente, caso ainda não tenha a criado.
  
  - Você encontrará a lista com as informações dos Pokémon no arquivo `src/data.js`.
  
  - Cada Pokémon da lista deverá ser renderizado por um componente `Pokemon`. Passe as informações do Pokémon através da `props` que já existe nesse componente.
  </details>


<details>
  <summary>💡dicas</summary><br />
  
  - Dependendo da sua implementação, o teste do requisito 1 pode começar a falhar quando você adicionar a lógica de renderizar a lista, a qual é recebida por `props` no componente `<Pokedex />`. 
> Pense em um jeito de garantir um valor padrão para esse `props`, mesmo que nenhum valor seja passado.
  
  - Lembre-se de que, quando você está renderizando uma lista no React, é necessário adicionar um atributo `key` em cada elemento. Você pode usar o `id` do Pokémon como `key`.

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />
  
  - Se o componente `<Pokedex />` renderiza a quantidade correta de elementos.
  
  - Se todos os elementos da lista são renderizados.

</details>

---

### Exercício extra

Estilize a aplicação adicionando classes que vão aprimorar seus componentes, de modo que cada conteúdo listado seja um card
