# :pencil: Autenticação

O objetivo dos exercícios desse dia foi aprender a construir uma aplicação com o _Django REST Framework_ para aprender a fazer **autenticação**! O Django oferece diversas formas de fazê-la e implementei várias delas sobre a mesma aplicação - comparando, o custo benefício de cada alternativa. Além disso, pratiquei mais com o Django REST Framework, aprendendo a criar endpoints de entidades aninhadas - para, por exemplo, criação simultânea de entidades que possuem, uma com a outra, relações obrigatórias 1:1. Para isso deveria utilizar o _Django REST Framework_ para criar endpoints com entidades aninhadas, utilizar a `BasicAuthentication` do Django, utilizar a `TokenAuthentication` do Django, utilizar o módulo `Simple JWT` para implementar autenticação no _Django REST Framework_ e comparar as várias formas de se implementar autenticação no _Django REST Framework_.

Os requisitos dos exercícios são:

## Exercício 1 - Crie um aplicativo para personal trainers!

Para o exercício de hoje, você irá criar um MVP de uma API a ser usada por um aplicativo de Personal Trainers. Eis as tarefas:

1. Sua primeira tarefa é criar a aplicação do zero, com banco de dados MySQL num Docker, e fazer o _Hello, world!_ da aplicação, configurando inclusive um `superuser` para o painel de admin.
2. Depois, vai criar os models para `Client` e `WorkoutPlan`: 
    2.1. `Client` deve ter um atributo `name` e um `address` e uma data de criação.
    2.2. O `WorkoutPlan` deve estar vinculado a um `Client` e um `personal_trainer` e deve possuir um atributo `workout`, um campo de texto onde os treinos serão registrados. Para o nosso MVP, isso basta. O atributo `personal_trainer` pode ser o `user` padrão que o Django oferece - o `superuser` que você criar irá aparecer na lista de personal trainers, mas não há problemas. Encare como um exercício bônus criar um modelo a mais para os personals.
    2.3. A API só deve permitir o cadastro de um `Client` junto, na mesma requisição, com o cadastro de um `WorkoutPlan`
3. Crie o `Viewset` de `Client` e os _serializers_ necessários para se criar, simultaneamente, um `Client` e seu `WorkoutPlan`.
4. Adicione o que for preciso para sua aplicação ter autenticação via `Simple JWT` - um personal trainer só pode ver os treinos e clientes que tiver criado.
5. (Bônus) Faça uma função customizada para permitir o _update_ aninhado de seu plano de treino. Para saber como sobrescrever essa função no _serializer_, cheque [a documentação](https://www.django-rest-framework.org/api-guide/serializers/#writing-update-methods-for-nested-representations).

> _De olho na dica 👀: Lembre-se, na parte dos serializers, que um cliente pode ter vários treinos_
