# :pencil: Injeção de dependência com Spring

O objetivo dos exercícios desse dia foi me aprofundar um pouco mais no framework Spring, compreendendo a utilização da arquitetura em camadas, explorando a inversão de controle e a injeção de dependências e a como monitorar aplicações Spring. Para isso deveria realizar a construção de aplicações utilizando arquitetura em camada, entender qual a relação entre arquitetura em camadas e o Spring, compreender o que é inversão de controle e injeção de dependências, aprender a como fazer injeção de dependência com Spring e a como monitorar nossas aplicações Spring com Spring Boot Actuator.

Os requisitos dos exercícios são:

## Relatório de Clima

### 1 - Implementar um bean para WeatherClient

<details>
  <summary>Criar um bean que implemente a interface `WeatherClient`</summary><br />

O projeto já disponibiliza uma interface `WeatherClient`, então você precisa:

- Criar uma classe que implementa essa interface
  - Esta classe pode ter qualquer nome
- Implementar o método `getWeather`, que:
  - Recebe o nome de uma cidade como parâmetro
  - Retorna uma String representando o clima nessa cidade.
    - Nota: neste momento você pode retornar uma String fixa que quiser (ex: "tempinho bom"). Ao final do projeto há uma sugestão caso depois você queira implementar uma consulta real ao clima da cidade.
- Disponibilizar a classe implementada como um Bean
  - Você pode utilizar qualquer das técnicas que aprendeu, seja transformando a classe em um componente ou disponibilizando-a através de um método gerador de bean.

Você também pode criar classes e métodos extras, se julgar necessário.

_**Importante**_: implemente sua solução em um subpacote da aplicação principal, mas não utilize o pacote `interfaces`, pois ele é restaurado durante a execução do projeto pelo avaliador. Você pode criar um subpacote próprio se quiser, desde que esteja dentro da estrutura da aplicação principal.

</details>

### 2 - Implementar um bean para WeatherService

<details>
  <summary>Criar um bean que implemente a interface `WeatherService`, fazendo </summary><br />

O projeto já disponibiliza uma interface `WeatherService`, então você precisa:

- Criar uma classe que implementa essa interface
  - Esta classe pode ter qualquer nome
- Sua classe deve utilizar injeção de dependências para receber o bean implementado para a `WeatherClient`.
  - Você pode utilizar qualquer uma das técnicas de injeção de dependência aprendidas, mas considere qual o caso de uso mais apropriado aqui.
- Implementar o método `getWeatherReport`, que:
  - Recebe o nome de uma cidade como parâmetro
  - Retorna uma String no formato `O clima é: XXXXXX`, onde `XXXXXX` deve ser o retorno do método `getWeather`, chamado a partir do bean da `WeatherClient` que foi injetado acima.
- Disponibilizar a classe implementada como um Bean.
  - Você pode utilizar qualquer das técnicas que aprendeu, seja transformando a classe em um componente ou disponibilizando-a através de um método gerador de bean.
    - Sugestão: utilize uma técnica diferente da que utilizou para o primeiro bean, pois isso vai te ajudar a praticar :)

Você também pode criar classes e métodos extras, se julgar necessário.

_**Importante**_: implemente sua solução em um subpacote da aplicação principal, mas não utilize o pacote `interfaces`, pois ele é restaurado durante a execução do projeto pelo avaliador. Você pode criar um subpacote próprio se quiser, desde que esteja dentro da estrutura da aplicação principal.

</details>
