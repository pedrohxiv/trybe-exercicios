# :pencil: Utilizando Containers - Docker

O objetivo dos exercícios desse dia foi aprender sobre uma ferramenta incrível: o **Docker 🐋**, entendendo como utilizar essa ferramenta e qual é a importância dela. Para isso deveria compreender o conceito de empacotamento de aplicações, compreender o que é o Docker e quais problemas ele resolve, compreender o que é uma imagem Docker, compreender o que é um container Docker, instalar o Docker, executar meu primeiro container Docker, compreender quais são os principais comandos para utilização do Docker na interface de linha de comando (CLI) e obter imagens vindas de um Registry e executá-las como um container!

Os requisitos dos exercícios são:

## 🚀 Exercício 1

No [Docker Hub](https://hub.docker.com/search?q=&type=image), utilizando a caixa de busca (_`"Search for great content"`_), **busque pela imagem da Distribuição Linux `Debian`**.

## 🚀 Exercício 2

Uma vez que encontrar a **imagem oficial**, acesse-a (clicando em seu card) e verifique na página de detalhes. Confira se existe algum comando para baixar a imagem localmente sem ter que criar um `container` para isso.

## 🚀 Exercício 3

**Baixe a imagem utilizando a `tag`: `stable-slim`**, que é uma versão reduzida da distribuição.

## 🚀 Exercício 4

Após baixar a imagem para seu computador local, **crie e execute um `container`** no modo interativo utilizando essa imagem como referência — não esqueça referenciar a `tag`.

## 🚀 Exercício 5

No terminal, você deve conseguir rodar o **comando `cat /etc/*-release`**, que vai retornar os dados da distribuição `Debian` que está sendo rodada dentro do `container`.

## 🚀 Exercício 6

**Encerre o terminal**.

## 🚀 Exercício 7

**Verifique na sua lista de contêiners** qual `contêiner` se refere ao exercício que acabou de praticar.

## 🚀 Exercício 8

**Inicie o mesmo `container` novamente**, sem criar outro. Valide se ele está ativo na lista de containers.

## 🚀 Exercício 9

**Retome o `container`** que foi criado anteriormente neste exercício.

## 🚀 Exercício 10

**Rode o comando `cat /etc/debian_version`** que deve retornar a versão atual do sistema do `container`.

## 🚀 Exercício 11

**Encerre o terminal**.

## 🚀 Exercício 12

**Remova somente o `container` criado para esse exercício**.

## Exercício 13

_[BÔNUS]_ **Crie e rode de modo interativo em modo ‘Cleanup’**, a imagem `andrius/ascii-patrol`.

## Exercício 14

_[BÔNUS]_ **Encerre o `container` utilizando os botões [`ctrl`] + [`c`]**.

