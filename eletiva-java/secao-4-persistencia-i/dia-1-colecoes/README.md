# :pencil: Coleções

O objetivo dos exercícios desse dia foi dar inicio a integração com um banco de dados, para conseguir, persistir, consultar e manipular os dados, criando um sistema mais robusto. Antes entendi como, dentro de uma _API_, esses dados se estruturam, como navegar por eles e como transformá-los. Para isso deveria entender a estrutura de dados facilitadas no Java por meio das Collections e suas extensões: List e Set e suas implementações, compreender Maps, Streams e Streams de Streams.

Os requisitos dos exercícios são:

# `Consulta de Filmes`

Este exercício é para quem gosta de cinema (e de manipular umas listas em Java vez ou outra 🤪)!

No arquivo `Movie.java` nós temos uma classe que representa um filme.

Os campos `categories`, `directors`, `actors` e `characters` são todos conjuntos de _Strings_ porque cada um deles pode ter múltiplos valores. Por exemplo, um filme pode se encaixar em múltiplas categorias (ação, comédia etc.) e também pode ter mais de uma pessoa diretora (em alguns filmes da Marvel, os irmãos Russo, Joe e Anthony, por exemplo).

O campo `actorsByCharacters` é um _Map_ que associa o nome de um personagem (`String`) a um conjunto de artistas (`Set<String>`). Por exemplo, em Space Jam (2021), o personagem LeBron James é interpretado pelo próprio jogador da NBA em sua fase adulta, mas é também interpretado mais jovem pelo ator Stephen Kankole.

Seu objetivo é implementar uma classe que realiza as seguintes queries sobre uma dada coleção de filmes:

<details>
<summary>Consulta 1. Retorne uma lista com os filmes lançados em um ano específico.</summary>
Será testado:
    Consulta 1 - consulta com base em coleção vazia deve retornar um conjunto vazio
    Consulta 1 - consulta deve retornar resultados corretos
</details>

<details>
<summary>Consulta 2. Retorna uma lista ordenada com os nomes de todos os atores e atrizes.</summary>
Será testado:
    Consulta 2 - consulta com base em coleção vazia deve retornar um conjunto vazio
    Consulta 2 - consulta deve retornar resultados corretos
</details>

<details>
<summary>Consulta 3. Retorna um Map que tem como chave os atores ou atrizes e como valor um conjunto com os filmes que eles interpretaram.</summary>
Será testado:
    Consulta 3 - consulta com base em coleção vazia deve retornar um conjunto vazio
    Consulta 3 - consulta deve retornar resultados corretos
</details>

<details>
<summary>Consulta 4. Artistas que interpretaram a si próprios.</summary>
Será testado:
    Consulta 4 - consulta com base em coleção vazia deve retornar um conjunto vazio
    Consulta 4 - consulta deve retornar um conjunto vazio quando nenhum artista atende ao requisito
    Consulta 4 - consulta deve retornar resultados corretos
</details>

<details>
<summary>Consulta 5. Artistas que atuaram em filmes de uma determinada pessoa diretora, por ordem alfabética.</summary>
Será testado:
    Consulta 5 - consulta com base em coleção vazia deve retornar uma lista vazia
    Consulta 5 - consulta deve retornar uma lista vazia quando nenhum artista atende ao requisito
    Consulta 5 - consulta deve retornar resultados corretos na ordem correta
    Consulta 5 - nenhum artista deve aparecer mais de uma vez na lista de resultados
</details>

<details>
<summary>Consulta 6. Filmes em que a pessoa diretora atuou (ou pelo menos um deles), por ordem de lançamento (mais recentes primeiro).</summary>
Será testado:
    Consulta 6 - consulta com base em coleção vazia deve retornar uma lista vazia
    Consulta 6 - consulta deve retornar uma lista vazia quando nenhum filme atende ao requisito
    Consulta 6 - consulta deve retornar resultados corretos na ordem correta
    Consulta 6 - nenhum filme deve aparecer mais de uma vez na lista de resultados
</details>

<details>
<summary>Consulta 7. [Bônus] Filmes lançados num determinado ano, agrupados por categoria.</summary>
Será testado:
Consulta 7 - consulta com base em coleção vazia deve retornar um Map vazio
Consulta 7 - consulta deve retornar um Map vazio quando nenhum filme atende ao requisito
Consulta 7 - consulta deve retornar resultados corretos
Consulta 7 - filme que atende os requisitos e pertence a mais de uma categoria deve aparecer em todas elas
</details>



Observações:

- "Artistas que interpretaram a si próprios" se refere a atores ou atrizes que, em pelo menos um filme, têm o seu nome como uma das chaves do Map `actorsByCharacters` e também como um dos itens pertencentes ao conjunto associado a esta mesma chave.

- "Artistas que atuaram em filmes de uma determinada pessoa diretora" se refere a artistas que, em pelo menos um filme, têm o seu nome como um dos itens do campo `actors`, simultaneamente, em que a pessoa diretora em questão tem o seu nome como um dos itens do campo `directors`.

- "Filmes em que a pessoa diretora atuou (ou pelo menos um deles)" se refere a filmes em que pelo menos um dos itens do campo `directors` também é um item do campo `actors`.

## Requisitos do código

<details>
<summary>Detalhes</summary>
Você deve escrever seu código no arquivo `Queries.java`.

Cada método equivale a uma das queries. Cada método deve retornar dados obtidos do atributo `movies` que pertence à classe, atendendo ao requisito de cada consulta. Repare nos tipos retornados:

- A primeira consulta retorna um `Set<>`, pois os resultados não têm uma ordem definida.
- A segunda consulta retorna `List<>`, pois os resultados são dispostos em ordem alfabética.
- A terceira consulta retorna `List<>`, pois os resultados são dispostos em ordem de lançamento.
- A quarta consulta retorna um `Map<String, Set<Movie>>`. As chaves (`String`) do Map representam uma categoria, enquanto os valores (`Set<Movie>`) representam o conjunto de filmes que se encaixam nessa categoria.

⚠️ **Importante!** Você nunca deve retornar `null`. Se nenhum dos itens atende aos requisitos da consulta, retorne uma coleção (Set, List ou Map) vazia.

Você também deve prestar atenção à possibilidade de um item ser incluso mais de uma vez na coleção retornada:
- A coleção Set não muda quando se adiciona um item que já pertencia ao conjunto. Portanto, você não precisa se preocupar com duplicidade na consulta 1, em que o tipo retornado é Set.
- A coleção List permite a existência de itens duplicados. Porém, **as queries 2 e 3 (que retornam Lists) não devem retornar coleções contendo itens duplicados**. Certifique-se de que cada artista/filme apareça na lista no máximo uma vez.
- Na consulta 4, se um mesmo filme se encaixa em mais de uma categoria, ele deve estar presente em todos os conjuntos correspondentes. Por consequência, o filme vai aparecer mais de uma vez dentro do Map.

Você pode implementar os métodos da classe `Queries` de duas formas:

- Por meio de manipulação direta de coleções, construindo Lists, Sets e Maps manualmente, iterando coleções usando `for` e chamando métodos como `add()`, `addAll()` e `get()`.
- Por meio da API `java.util.stream`, chamando métodos como `stream`, `filter`, `map`, `flatMap` e `collect`.

As duas formas são válidas, sendo possível inclusive utilizar as duas ao mesmo tempo. O importante é que os dados sejam retornados conforme o requisito de cada consulta.
</details>

## Validação do código

<details>
<summary>Detalhes</summary>
Para conseguir rodar o seu código e verificar se ele funciona, você pode usar a classe do arquivo `Main.java`.

A classe `Movies` contém alguns filmes que possuem dados incompletos, mas que servem bem ao propósito de validar o resultado das queries. Essa classe estará disponível para você utilizar e também ler o código fonte, caso necessite. Existe outra classe auxiliar, `MovieConstructor`, que também será disponibilizada, mas você não precisa se preocupar com ela, já que sua função é facilitar o carregamento dos dados da classe `Movies`.

</details>

Para garantir a experiência completa, não tire os olhos da tela. Bom filme! Quer dizer... boa sorte no desafio! 🍿
