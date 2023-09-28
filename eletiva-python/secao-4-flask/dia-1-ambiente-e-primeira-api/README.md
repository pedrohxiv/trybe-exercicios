# :pencil: Ambiente e primeira API

O objetivo dos exercícios desse dia foi começar a explorar o **Flask**, um framework web em Python que permite a criação de aplicações _web_ de forma simples e rápida. Para isso deveria compreender o framework Flask e seu funcionamento, realizar a criação de uma Rest API Web utilizando o Flask, realizar a conexão do Flask com MongoDB pelo Docker e utliziar de bibliotecas e extensões para otimizar a aplicação.

Os requisitos dos exercícios são:

## Exercício 1

Crie uma nova Blueprint Controller semelhante à API de piadas, para criar uma coleção de sugestões de músicas na base de dados.

**Passos:**

1. Crie a `music_model.py` (Implementação equivalente a `joke_model.py`).
2. Crie a `musics_controller.py` e registre como Blueprint.
    1. Registre em `musics_controller.py` e `app.py`, semelhante ao realizado para a API no exemplo do conteúdo.
3. Crie uma rota `POST` para salvar uma música.

```
@musics_controller.route("/", methods=["POST"])
```

## Exercício 2

Crie uma rota `GET` para retornar uma música aleatória.

```
@musics_controller.route("/random", methods=["GET"])
```

## Exercício 3

Em nossas `jokes_controller` e `musics_controller`, retornamos os números fixos dos _status_ HTTP:

> _200 - OK_
> _201 - Created_
> _204 - No Content_
> _404 - Not Found_

Faça uma refatoração na hora de retornar o _status_ HTTP, de forma que não sejam utilizados números mágicos nos _status_.

> _Sugestão, refatore usando o `<enum>`([https://docs.python.org/3/library/enum.html](https://docs.python.org/3/library/enum.html)) do Python._
