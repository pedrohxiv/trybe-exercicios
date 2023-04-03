# :pencil: JWT - (JSON Web Token)



Os requisitos dos exercícios são:

Antes de começar, crie um novo projeto chamado `hello-jwt` utilizando o comando `npm init @trybe/backend hello-jwt`, aceitando as opções padrão.

> ⚠️ Ao iniciar o comando, escolha o MySQL como banco de dados.

## 🚀 Exercício 1:

Crie um _endpoint_ `POST /login`.

- O _endpoint_ deve receber os seguintes dados no corpo da requisição:

```
{
  "username": "algumNomeDeUsuario",
  "password": "algumaSenha"
}
```

- Caso `username` e `password` sejam válidos, retorne um _token_ que atenda às seguintes especificações:
    - Expira em uma hora;
    - Contém, no _payload_, o nome de usuário informado na _request_;
    - Contém, no _payload_, uma propriedade `admin`, com o valor `false`.
    - Para retornar o _token_, utilize o seguinte formato no corpo da resposta:

    ```
    {
      "token": "<JWT aqui>"
    }
    ```

- Para que `username` seja válido, seu valor precisa ser uma _string_ alfanumérica de, pelo menos, 5 caracteres.
- Para que `password` seja válido, seu valor precisa ser uma _string_ de, pelo menos, 5 caracteres.

## 🚀 Exercício 2:

Altere o _endpoint_ `POST /login`:

- Caso `username` seja `admin` e `password` seja `s3nh4S3gur4???`, a chave `admin` no _payload_ do _token_ gerado deve ter o valor `true`.

## 🚀 Exercício 3:

Crie o _endpoint_ `/GET /users/me`:

- O _endpoint_ só pode ser acessado por pessoas autenticadas.
- Para realizar a autenticação, a requisição deve conter o _header_ `Authorization`, cujo valor deve ser um _token_ válido.
- Caso o _token_ não exista, retorne o status `401 Unauthorized`, com o seguinte corpo da resposta:

```
{
  "error": {
    "message": "Token not found"
  }
}
```

- Caso aconteça um erro ao validar o _token_, retorne o status `401 Unauthorized` com o seguinte conteúdo no corpo:

```
{
  "error": {
    "message": "<mensagem de erro da biblioteca>"
  }
}
```

- Caso o _token_ seja válido, retorne o status `200 OK` e, no corpo da resposta, o nome de usuário ao qual aquele _token_ pertence e o valor da propriedade `admin`, no seguinte formato:

```
{
  "username": "nome de usuário do token",
  "admin": true // ou false
}
```

- Utilize um _middleware_ exclusivo para a autenticação. Armazene-o no arquivo `src/middlewares/auth.js`.

## 🚀 Exercício 4:

Crie o _endpoint_ `/GET /top-secret`.

- O _endpoint_ só pode ser acessado por pessoas autenticadas.
- Apenas _tokens_ contendo, no _payload_, a propriedade `admin` com o valor `true` têm autorização para acessar esse _endpoint_.
- Caso o _token_ não exista, retorne o status `401 Unauthorized`, com o seguinte corpo da resposta:

```
{
  "error": {
    "message": "Token not found"
  }
}
```

- Caso aconteça um erro ao validar o _token_, retorne o status `401 Unauthorized` com o seguinte conteúdo no corpo:

```
{
  "error": {
    "message": "<mensagem de erro da biblioteca>"
  }
}
```

- Caso o _token_ seja válido, mas a propriedade `admin` do _payload_ não seja `true`, retorne o status `403 Forbidden` e o seguinte JSON:

```
{
  "error": {
    "message": "Restricted access"
  }
}
```

- Caso o _token_ seja válido e o _payload_ contenha `admin` com o valor `true`, retorne o seguinte JSON:

```
{
  "secretInfo": "Peter Parker é o Homem-Aranha"
}
```

- Para validar se a pessoa é admin, crie um novo _middleware_ no arquivo `src/middlewares/admin.js`.