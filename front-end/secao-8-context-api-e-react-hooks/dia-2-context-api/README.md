# :pencil: Usando o Redux no React - Actions Assíncronas

O objetivo dos exercícios desse dia foi entender como utilizar a _Context API_ que permite compartilhar estado entre vários componentes em uma árvore de componentes, sem que seja necessário passá-lo manualmente por meio de props do componente que o armazena até aquele que de fato o utiliza. Para isso deveria utilizar a _Context API_ do **React** para gerenciar estado da aplicação.

Os requisitos dos exercícios são:

Você trabalha como pessoa desenvolvedora Front-end no Studio Ghibli, um dos maiores estúdios de animação do Japão. A sua tarefa será criar uma aplicação que lista todos os filmes de animação produzidos pelo estúdio. A pessoa usuária poderá favoritar os filmes que desejar, que poderão ser acessados em uma outra página.

## Exercício 1 - Montando a estrutura

- Crie o `Context` dentro do arquivo `/src/context/FilmContext.js`;
- No componente `App`, utilize o Hook `useEffect` para fazer a chamada à API utilizando o endpoint `https://api-trybe-frontend.vercel.app/api/ghibli-animations`;
- Ainda no componente `App`, crie um estado que será o responsável por armazenar os dados retornados pela API.
- Com o Context criado, adicione o `FilmContext.Provider` no arquivo App.js, envolvendo todas as rotas.
- Adicione como valor do `Provider` o estado criado contendo os dados da API.

### Testes

- A API foi chamada com o endpoint corretamente - uma e apenas uma vez.
- Todos os componentes devem ser funcionais.

## Exercício 2 - Exibindo a lista de filmes na página Home

- No arquivo `/src/pages/Home`, liste os filmes recebidos pela API:
  - Liste o título (como h2), a imagem e a descrição de todos os filmes. A imagem deve ter a propriedade `alt` como sendo o nome do filme.
  - Adicione um botão, em cada filme, para salvar a animação na página de favoritos.

💡 Dica: Utilize o Hook `useContext` para recuperar os valores armazenados no `Provider`.

### Testes

- Todos os títulos, imagens e botões são exibidos na página Home

## Exercício 3 - Exibindo a lista de filmes favoritados na página Favorites

- No arquivo `src/pages/Favorites.js`, liste todos os filmes favoritados na página Home;
- Na página de filmes favoritados, cada filme deve possuir um botão que, ao ser clicado, remove o filme da lista de filmes favoritos.
- Você **deve** armazenar os itens favoritos no `Context`.

⚠️ Atenção: O mesmo filme não pode ser listado mais de uma vez na página de favoritos.

### Testes

- Clicar no botão de favoritar faz com que aquele filme apareça também na página de favoritos.
- Clicar no botão de favoritar em um filme que está na lista de favoritos faz com que aquele filme saia da página de favoritos.

