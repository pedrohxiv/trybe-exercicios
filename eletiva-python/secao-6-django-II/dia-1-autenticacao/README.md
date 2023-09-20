# :pencil: Autenticação



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
