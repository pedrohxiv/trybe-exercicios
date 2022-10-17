# :pencil: Jest - Testes Assíncronos



Os requisitos dos exercícios são:

## Magic Card

Agora você vai treinar um pouco mais testes assíncronos em Jest com os exercícios do Magic Card.

#### Informações importantes para os requisitos 1 e 2:

* Todas as funções já estão implementadas, você precisará se preocupar apenas em testá-las.
* Não se esqueça de atualizar o número de `expect.assertions`, a cada `expect` que você implementar em seus testes.

**Dica de ouro**: leia e entenda cada parte da implementação da função `getMagicCard` que está no arquivo `src/magic.js`. Isso te ajudará a implementar os testes.

**Outra dica de ouro**: a função `getMagicCard` com o argumento que vamos usar durante esse exercício, "**130550**", vai retornar o seguinte objeto:
```javascript
{
  name: "Ancestor's Chosen",
  manaCost: "{5}{W}{W}",
  types: [ "Creature" ],
  subtypes: [ "Human", "Cleric" ],
  rarity: "Uncommon",
}
```

Você deverá remover os comentários do código sempre que necessário a medida que desenvolve os requisitos.

### 1. Implemente os testes da função `getMagicCard`

<details>
<summary>Implemente um teste para cada verificação dentro do arquivo <code>tests/magic.test.js</code></summary><br />

   1. Verifique se `getMagicCard` é uma função.
   2. Verifique se, ao chamar a função `getMagicCard`, a função *fetch* foi chamada.
   3. Verifique se, ao chamar a função `getMagicCard` com o argumento "**130550**", a função *fetch* foi chamada com o endpoint "https://api.magicthegathering.io/v1/cards/130550".
</details>

### 2. Verificando o retorno da função `getMagicCard`
<details>
<summary>Ainda dentro do arquivo <code>magic.test.js</code> no segundo describe, implemente os seguintes testes</summary><br />

  1. Verifique se a propriedade `name` retornada pela função `getMagicCard` possui valor `Ancestor's Chosen`.
      - ***Dica***: você pode desestruturar o objeto response e obter diretamente suas propriedades.
</details>

---

#### Informações importantes para os requisitos 3 e 4:

* Dentro da pasta `src/data`, você encontrará o arquivo `favoriteCards`, leia e compreenda sua estrutura para realizar os exercícios.
* A função `saveFavoriteMagicCard`, além de realizar a chamada a API, ela também modifica o arquivo `favoriteCards`, adicionando um novo card a cada execução.
* Não se esqueça de atualizar o número de `expect.assertions`, a cada `expect` que você implementar em seus testes.

Agora temos um arquivo com algumas das cartas preferidas do nosso jogador. Você pode verificar a sua estrutura no arquivo `data/favoriteCards.js`. Utilizaremos este arquivo para os próximos passos.

**Dica de ouro**: leia e entenda cada parte da implementação da função `saveFavoriteMagicCard` que está no arquivo `src/magic.js.` Isso te ajudará a implementar os testes.

### 3. Implemente os testes da função `saveFavoriteMagicCard`

<details>
<summary>Implemente um teste para cada verificação dentro do arquivo <code>tests/saveFavoriteCard.test.js</code></summary><br />

  1. Implemente um teste que verifique que após a execução da função `saveFavoriteMagicCard`, `favoriteCards` passa a possuir `length === 5`.
     - Dentro do mesmo it, implemente um teste que verifique que na última posição do array `favoriteCards` existe um card com o a propriedade `name` e valor "Beacon of Immortality".
     - Ainda no mesmo it, chame a função `saveFavoriteMagicCard` com o argumento "**130554**" e verifique se `favoriteCards` passa a possuir `length === 6`.

  #### Para os próximos exercícios, desfaça os comentários o teste dentro do escopo do segundo it.
  Após desfazer os comentários o teste dentro do segundo it, rode os testes. 

  Você vai perceber que o teste falhou. Consegue entender porque ele falha? 

  <details>
  <summary>Resposta</summary><br />
  
  Isso mesmo, a função `saveFavoriteMagicCard` modificou o arquivo `favoriteCards` no escopo do it anterior. Desta maneira, para o Jest, o array `favoriteCards` não possui quatro cards, mas sim, seis.
  </details>

  2. Implemente a função `restoreFavoriteCards` com uma lógica capaz de restaurar o array `favoriteCards` ao seu valor original, depois chame essa função dentro do método `afterEach` para os testes poderem passar.

</details>

### 4. Verifique os nomes das cartas favoritas

<details>
<summary>Implemente um teste para cada verificação dentro do arquivo <code>tests/saveFavoriteCard.test.js</code></summary><br />


  * Este exercício deve ser realizado após a implementação da função `afterEach` do requisito 3.
  * Implemente o teste solicitado dentro do escopo do segundo `it`.

  1. Utilizando a função `map`, crie um array contendo apenas a propriedade `name` de todos os cards presentes no deck original, ou seja, no `favoriteCards`. Este array deve conter quatro nomes e deve ser salvo em uma nova variável.
      - Implemente um teste que verifique que o array que você obteve com o `map` contém a seguinte estrutura e valores:

```js
['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad']
```

</details>
