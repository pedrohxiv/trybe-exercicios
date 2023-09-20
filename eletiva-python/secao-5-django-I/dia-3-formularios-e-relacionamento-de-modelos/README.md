# :pencil: Templates do Django



Os requisitos dos exercícios são:

## Exercício 1 - Setup do projeto

Crie o projeto `marketplace`, crie o app `products` e faça a instalação da aplicação no projeto.

## Exercício 2 - Criando os modelos do projeto

Implemente os modelos `Product`, `Seller`, `Buyer` e `Order` no arquivo `models.py`:

- `Product` deve ter os campos `name`, `description`, `price` e `seller`;
- `Seller` deve ter os campos `name`, `email`;
- `Buyer` deve ter os campos `name`, `email`;
- `Order` deve ter os campos `buyer`, `product`.

## Exercício 3 - Criando os formulários

Implemente um formulário para cada um dos modelos criados no exercício anterior. Esses formulários serão utilizados para inserir dados no banco:

- `CreateProductForm`;
- `CreateSellerForm`;
- `CreateBuyerForm`;
- `CreateOrderForm`.

## Exercício 4 - Implementando a camada view

Implemente as seguintes funções na camada views:

- `index`: renderiza o template inicial do projeto (`index.html`);
- `product`: renderiza o template de criação de produto (`product.html`) e cria quando recebe a requisição POST com os dados;
- `seller`: renderiza o template de criação de vendedor (`seller.html`) e cria quando recebe a requisição POST com os dados;
- `buyer`: renderiza o template de criação de comprador (`buyer.html`) e cria quando recebe a requisição POST com os dados;
- `order`: renderiza o template de criação de pedido (`order.html`) e cria quando recebe a requisição POST com os dados;

## Exercício 5 - Criando as URLs

Implemente as URLs do projeto:

- `/`: vinculada à view `index`;
- `/product`: vinculada à view `index_product`;
- `/seller`: vinculada à view `index_seller`;
- `/buyer`: vinculada à view `index_buyer`;
- `/order`: vinculada à view `index_order`;

## Exercício 6 - Criando os templates

Implemente os templates do projeto:

`base.html`: template base do projeto que deverá ser herdado por todos os outros templates;
`index.html`: template inicial do projeto que deverá poder encaminhar a pessoa para cada uma das páginas de criação;
`product.html`: template de criação de produto;
`seller.html`: template de criação de vendedor;
`buyer.html`: template de criação de comprador;
`order.html`: template de criação de pedido.
