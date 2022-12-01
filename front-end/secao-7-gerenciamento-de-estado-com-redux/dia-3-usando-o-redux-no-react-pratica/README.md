# :pencil:  Usando o Redux no React - Prática

O objetivo dos exercícios desse dia foi colocar ainda mais em **prática o _Redux_ com o _React_**. A ideia foi praticar para ganhar familiaridade com o Redux. Para isso deveria utilizar o Redux nas aplicações.

Os requisitos dos exercícios são:

## Formulário com Redux e React

Vamos criar um formulário utilizando o `Redux`! 🚀

Para esse exercício criaremos um formulário de cadastro manipulando os estados com o `Redux`.

## Começando o exercício

Neste exercício, será necessário implementar o Redux para dois formulários: 

- um para dados pessoais
- outro para dados profissionais;  

Os formulários já estão criados, com isso não é necessário criar novos arquivos, além dos propostos para a execução do exercício.

Para começar, é preciso salvar as informações de cada formulário no gerenciador de estados. Depois, em uma outra página, acessar esses dados para que sejam renderizados.

Vocês precisarão de:

- Gerenciador de estados (Redux), para salvar as informações na `store` e também para acessá-las.

Mãos ao código! 💪

## Parte 01 - Implementando o Redux

Crie a estrutura de pastas necessária para a implementação do Redux. A estrutura é opcional e você pode implementar da forma que desejar, mas abaixo deixamos uma sugestão.

<details>
  <summary>
    Sugestão de estrutura de pastas:
  </summary>

- Crie a pasta `src/redux` para agrupar todos os arquivos relacionados ao Redux;
- Crie a pasta `src/redux/actions/` para armazenar as `actions` do projeto;
- Crie a pasta `src/redux/reducers` para armazenar os `reducers` do projeto;
- Crie o arquivo `src/redux/index.js`, que será o arquivo responsável por criar e exportar a `store` da aplicação.
- Implemente o `reducer`.
- Implemente a `store`.
- Implemente as `actions`.

</details>

👀 **De olho nas dicas:**

- De início, você pode implementar seu reducer apenas com o valor `default`;
- O `composeWithDevTools` pode te ajudar a visualizar as etapas do **_Redux_**;
- Lembre-se que, ao montar a estrutura do Redux, é preciso importar o `Provider`, que recebe a `store`, no `index.js`;
- Caso tenha dificuldade para montar a estrutura do Redux, você pode consultar o **Checklist do Redux com React**, na seção 7 dia 3;
- Faça as importações corretas para o bom funcionamento da sua aplicação.

## Parte 02 - Salvando as informações

Salve as informações das páginas `PersonalForm` e `ProfessionalForm` na `store`

👀 **De olho na dica:**  

- Lembre-se que o `mapStateToProps` lê as informações da `store` e a função `dispatch` envia as informações para a `store`;
- Lembre-se que para acessar o `dispatch` e as _props_ criadas pela função `mapDispatchToProps` você precisa _conectar_ sua aplicação ao _Redux_.

## Parte 03 - Renderizando as informações

Renderize as informações que estão salvas na `store` em `FormDataDisplay`

---
