# :pencil: Manipulando Imagens no Docker

O objetivo dos exercícios desse dia foi entender o objetivo de cada comando de Docker, seu uso e suas relações. Também criei imagens Docker para as aplicações utilizando os padrões e boas práticas do mercado. Para isso deveria criar imagens do zero no Docker, criar imagens Docker usando outras imagens como base, aplicar boas práticas e padrões na criação de imagem, dockerizar minhas aplicações, ou seja, criar uma imagem Docker com tudo que é necessário para executar meus projetos.

Os requisitos dos exercícios são:

## 🚀 Exercício

Vamos usar uma imagem disponível no nosso DockerHub conhecida como _[“figtrybe-artify”](https://hub.docker.com/r/betrybe/figtrybe-artify)_ (que gera mensagens no formato ASCII no terminal)!

A ideia é deixarmos a mensagem para o “figtrybe-artify” parametrizável. Dessa forma, conseguiremos executar o comando:

```
    docker container run --rm figtrybe-artify "#Go Trybers"
```

E ter a seguinte saída no terminal:

```
    _  _    ____         _____           _                   
  _| || |_ / ___| ___   |_   _| __ _   _| |__   ___ _ __ ___ 
 |_  ..  _| |  _ / _ \    | || '__| | | | '_ \ / _ \ '__/ __|
 |_      _| |_| | (_) |   | || |  | |_| | |_) |  __/ |  \__ \
   |_||_|  \____|\___/    |_||_|   \__, |_.__/ \___|_|  |___/
                                   |___/                     
```

Para isso:

1. Crie um _Dockerfile_ utilizando a imagem `betrybe/figtrybe-artify`.
2. Defina um `ENTRYPOINT` para a execução do comando.
  - Observe que o executável `figtrybe-artify` está nos caminhos `"node", "app.js"`;
  - Lembre-se que com ele, diferente do `CMD`, o comando não poderá ser sobrescrito com o `docker run`, porém conseguiremos passar parâmetros ao binário e exploraremos esse recurso para poder passar a mensagem.
3. Utilize o `CMD` para definir uma mensagem padrão.
4. Gere uma `build` e execute um container baseado em sua imagem sem passar nenhum comando.
5. Execute um novo container passando sua mensagem para testar. Além da mensagem você pode utilizar a opção `-f Ghost` para adicionar a fonte Ghost e então executar algo como `docker container run figtrybe-artify -f Ghost "VQV TRYBE"`, para exibir a mensagem com uma nova fonte como o exemplo abaixo:

```
                   (`-.       .-')        (`-.          .-') _   _  .-')              .-. .-')    ('-.   
   ,-. ,-.       _(OO  )_   .(  OO)     _(OO  )_       (  OO) ) ( \( -O )             \  ( OO ) _(  OO)  
   | | | |   ,--(_/   ,. \ (_)---\_),--(_/   ,. \      /     '._ ,------.   ,--.   ,--.;-----.\(,------. 
,--| |-| |--.\   \   /(__/ '  .-.  '\   \   /(__/      |'--...__)|   /`. '   \  `.'  / | .-.  | |  .---' 
'--| |-| |--' \   \ /   / ,|  | |  | \   \ /   /       '--.  .--'|  /  | | .-')     /  | '-' /_)|  |     
'--| |-| |--'  \   '   /,(_|  | |  |  \   '   /,          |  |   |  |_.' |(OO  \   /   | .-. `.(|  '--.  
   | | | |      \     /__) |  | |  |   \     /__)         |  |   |  .  '.' |   /  /\_  | |  \  ||  .--'  
   `-' `-'       \   /     '  '-'  '-.  \   /             |  |   |  |\  \  `-./  /.__) | '--'  /|  `---. 
                  `-'       `-----'--'   `-'              `--'   `--' '--'   `--'      `------' `------' 
```
