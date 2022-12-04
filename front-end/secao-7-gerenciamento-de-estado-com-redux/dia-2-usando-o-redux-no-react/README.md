# :pencil: Usando o Redux no React

O objetivo dos exercícios desse dia foi colocar em prática o que aprendido sobre como utilizar o [Redux](https://redux.js.org/) em uma aplicação [React](https://reactjs.org/). Para isso deveria criar um _store_ **Redux** em aplicações **React**, criar _reducers_ no **Redux** em aplicações **React**, criar _actions_ no **Redux**  em aplicações **React**, criar _dispatchers_ no **Redux** em aplicações **React**, conectar **Redux** aos componentes **React** e adicionar mais de um _reducer_ a uma _store_.

Os requisitos dos exercícios são:

## Redux com React

Você irá desenvolver 3 exercícios para solidificar seus conhecimentos de **Redux** com React.

 - 🚀 No primeiro exercício, desenvolveremos um semáforo simples.
 - 🚀 No segundo, trabalharemos com mais estados aplicando movimento em 3 carros.
 - 🚀 E para finalizar, iremos combinar o primeiro e segundo exercícios em um só, utilizando o `combineReducers`.

### Exercício 1

Esse projeto possui a implementação do Redux (store, action e reducer) em uma aplicação React. Ele consiste em um semáforo com três botões que, ao serem clicados, deverão renderizar a imagem correspondente da sua cor. Se apertar no botão `red`, a imagem com a luz **vermelha** deverá ser renderizada. O mesmo para as cores **amarela** e **verde**.

Após instalar as dependências e executar a aplicação com o comando `npm start`, você irá se deparar com três botões (_red_, _yellow_ e _green_). A princípio, ao serem clicados, nada acontecerá.

Seu objetivo nesse exercício será implementar o componente `TrafficSignal`, no arquivo `./src/components/TrafficSignal.jsx`, manipulando o estado global com o _Redux_. Você deverá:

- Implementar a função `mapStateToProps()` para criar a _prop_ `signalColor`, a qual deve receber o valor da chave `color` que está armazenada no estado global.
- Implementar a função `onClick` dos três botões:
  - Você deverá realizar o `dispatch()` da _action_ `changeSignalAction()`;
  - A _action_ deverá receber como parâmetro a respectiva cor do botão, em inglês: `changeSignalAction('red')` para o vermelho, `changeSignalAction('yellow')` para amarelo e `changeSignalAction('green')` para verde.

O estado global inicial da aplicação é o seguinte:

```js
state = {
  color: 'red',
}
```

### Exercício 2

Ao executar essa aplicação, você irá se deparar com três carros com as cores _Red_, _Blue_ e _Yellow_. Cada um deles apresenta um botão que, ao ser clicado, deve alterar o valor do estado global. O estado inicial da aplicação é o seguinte:

```js
state = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
}
```

Quando o valor de `cars.red` for `true`, o carro vermelho deverá se mover para a direita. Quando for falso, ele deve mover-se para a esquerda. O mesmo deve ocorrer para os três carros.

Toda a aplicação já está pronta e com o _Redux_ configurado. Seu desafio será implementar o componente `Cars`, no arquivo `./src/components/Cars.jsx`:

- Implemente a função `mapStateToProps` de modo que o componente tenha acesso às _props_ `redCar`, `blueCar` e `yellowCard`, as quais devem possuir o valor do estado global da sua respectiva cor (como exemplo, `redCar` deve possuir o valor da chave `cars.red`, armazenado no estado global).
- Implemente a função `onClick()` dos botões de modo que, quando clicados, a aplicação realize o `dispatch` da _action_ `moveCarAction`. Quando clicar no botão correspondente ao carro **vermelho**, caso o estado global `cars.red` possuir o valor `true`, ele deverá ser alterado para `false`, e vice-versa.

### Exercício 3

- Nesse exercício utilizaremos os códigos dos exercícios 1 e 2. Aqui vamos juntar (combinar) os reducers dos dois primeiros exercícios, para que eles possam ser carregados juntos na mesma página da aplicação.

> Obs.: Enquanto os reducers não forem criados, a aplicação exibirá um erro no navegador.

- O funcionamento dos dois componentes **deve se manter o mesmo**.

- Nesse exercício, toda a `store` já está pronta.

- Você precisará criar um arquivo para cada reducer dos exerícios anteriores(exercise-one e exercise-two), e mover o código de cada um deles para seus respectivos arquivos.

- Utilizar o arquivo `redux/reducers/index.js` para combinar os dois reducers. 

- Alterar os componentes `Cars.jsx` e `TrafficSignal.jsx` para receberem corretamente a informação de seus respectivos reducers.

- Utilize **Redux** para armazenar todo o estado da aplicação.
