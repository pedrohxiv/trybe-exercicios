# :pencil: Orquestrando Containers com Docker Compose

O objetivo dos exercícios desse dia foi aprender como gerenciar o ambiente de _containers_ utilizando a ferramenta **Docker Compose**. Além disso, entendi como e por que utilizar _volumes_ e também conheci o recurso de _networks_ no Docker. Para isso deveria instalar e utilizar a ferramenta docker-compose, entender a relação entre a ferramenta docker-compose e o Docker, e porque se usa ambos, gerenciar redes virtuais, utilizando-as para a comunicação e isolamento entre os contêineres, persistir dados dos contêineres utilizando volumes, criar arquivos compose para gerenciar todo seu ambiente com contêineres e entender e gerenciar Services, Network e Volumes, que são novos conceitos trazidos pelo Docker Compose.

Os requisitos dos exercícios são:

## Exercício 1 🚀:

Vamos aprimorar nossos conhecimentos sobre `images` e `volumes`, para isso:

1 - Crie um arquivo HTML chamado `missao_trybe.html` que tenha a seguinte estrutura:

- Tag <title> com o seguinte texto “Trybe”;
- Tag <H1> com o seguinte texto “Missão da Trybe”;
- Tag <p> com o seguinte texto “Gerar oportunidade para pessoas”;
- Salve o arquivo em qualquer lugar da sua máquina com a extensão html

2 - Crie um container para manter um servidor `httpd:2.4.54` Apache e vincule sua porta interna com a porta 4545 da sua máquina local.

3 - Após criar o container, acesse a página HTML que está rodando no servidor em seu browser.

4 - Acesse o arquivo `missao_trybe.html` e acrescente a tag `<p>` com o seguinte texto: “Nosso negócio é GENTE! #VQV”;

5 - Obtenha o id do container `httpd:2.4.54`;

6 - Obtenha o `Mounts` através da propriedade `Source`, que deve mostrar o volume desse container no _Docker Host_;

7 - Agora pare o container `httpd:2.4.54`;

8 - Exclua o seu container;

9 - Verifique se a pasta onde você salvo o arquivo html permanece no mesmo lugar;

10 - Obtenha o `IMAGE ID` do servidor;

11 - Depois de obter o `IMAGE ID`, exclua a imagem.

## Exercício 2 🚀:

Crie o arquivo Compose para subir um [ghost blog](https://ghost.org/), essa plataforma é similar com o WordPress e é utilizada para criar sites de conteúdo. Você pode ler no site oficial como criar conteúdos nele e utilizá-lo. Para esse exercício, utilizaremos apenas sua página de exemplo:

1 - Utilize a versão “3” no arquivo;

2 - Crie um `service` para subir a plataforma, utilize a imagem `ghost:1-alpine`;

3 - Publique a porta `2368`, fazendo _bind_ também para a `2368`;

4 - Suba a aplicação utilizando o `docker-compose` e então acesse a porta publicada para validar se deu tudo certo.

## Exercício 3 🚀:

Por padrão o `ghost` utiliza um [banco de dados `SQLite`](https://www.sqlite.org/index.html) interno para salvar as informações, porém, vamos alterar esse comportamento para exercitar nossos conhecimentos:

1 - Crie um novo serviço _db_ para o nosso banco de dados:

- Podemos utilizar o [banco de dados MySQL](https://hub.docker.com/_/mysql), utilize a imagem `mysql:5.7.40`;
- Precisamos definir uma senha `root` para o banco, para isso utilize a variável de ambiente `MYSQL_ROOT_PASSWORD`

2 - Agora precisamos configurar nosso serviço _ghost_ para utilizar o banco de dados:

- Defina o tipo de banco de dados a ser usado pelo `ghost` definindo a variável de ambiente `database__client` para `mysql`;
- Defina o serviço `db` como servidor do banco de dados na variável de ambiente `database__connection__host`;
- Defina as credenciais para a conexão com o banco de dados
    - Para definir a pessoa usuária (**root**), utilize a variável de ambiente `database__connection__user`
    - Para definir a senha (a mesma que definimos no nosso serviço `db`), utilize a variável de ambiente `database__connection__password`
- Defina o nome `ghost` para o nome do _database_ no banco de dados utilizando a variável de ambiente `database__connection__database`;
- Utilize a opção `depends_on` para criar relações de dependências entre os serviços.

3 - Suba o ambiente com o novo arquivo usando o `docker-compose` e então acesse a porta.

## Exercício 4:

Agora vamos praticar os conceitos de `volumes` e `networks`.

1 - Configure o nosso serviço _mysql_ para utilizar um volume, conforme vimos no conteúdo, utilize o caminho _target_ `/var/lib/mysql`.

2 - Ao invés de utilizar a rede padrão criada pelo _Compose_, defina uma rede chamada `my-network` para a comunicação dos dois serviços.

3 - Suba o ambiente com o novo arquivo usando o `docker-compose` e então acesse-o.

## Exercício 5:

Agora vamos criar um novo arquivo Compose, para rodarmos uma aplicação `React`, conforme vimos alguns exemplos do conteúdo:

1 - Inicie um novo projeto `ReactJS` utilizando o _create-react-app_;

2 - Crie o `Dockerfile`, conforme vimos na aula passada;

3 - Crie um novo arquivo _Compose_ utilizando a versão `3`;

4 - Defina um serviço no arquivo para nosso _app_, para isso utilize a opção `build` para apontar para o `Dockerfile`;

5 - Publique a porta exposta no `Dockerfile` fazendo bind para a porta `8080` do localhost;

## Exercício 6:

Para simularmos o processo de desenvolvimento, faça a alteração em alguma parte do código do _app react_, e então execute o comando para subir o serviço novamente, “rebuildando” a imagem para aplicar as alterações.

## Exercício 7:

Crie um arquivo Compose para subir o WordPress com _MySQL_:

1 - Utilize a imagem `wordpress:php8.0` e `mysql:5.7.40`;

2 - Faça bind da porta `80` do container do _wordpress_ para `8080` do _host_;

3 - Defina as seguintes variáveis para o _wordpress_:

- WORDPRESS_DB_HOST: db:3306
- WORDPRESS_DB_USER: wordpress
- WORDPRESS_DB_PASSWORD: wordpress
- WORDPRESS_DB_NAME: wordpress

4 - Defina as seguintes variáveis para o _mysql_:

- MYSQL_ROOT_PASSWORD: somewordpress
- MYSQL_DATABASE: wordpress
- MYSQL_USER: wordpress
- MYSQL_PASSWORD: wordpress

5 - Defina o volume `db_data` para o _mysql_;

6 - Utilize o parâmetro `depends_on` para criar dependência entre os serviços;

7 - Adicione a política de `restart` com o valor `always` aos serviços;

8 - Suba os serviços utilizando `docker-compose` e abra no terminal para validar o funcionamento.
