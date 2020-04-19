  ![logo](.github/logo.png)

# Fastfeet App
Esse é o Desafio do Bootcamp GoStack 10 da Rocketseat. Esse código corresponde ao desafio completo, incluindo o backend, frontend e app mobile do Fastfeet.

[](https://img.shields.io/badge/made%20by-Sandro%20Santos-blue)
[](https://img.shields.io/github/license/sandro-dev/fastfeet-backend?color=blue&label=license&logo=MIT)
[](https://img.shields.io/github/repo-size/sandro-dev/fastfeet-backend)

> “A sabedoria é a coisa principal; adquire pois a sabedoria, emprega tudo o que possuis na aquisição de entendimento.” (Provérbios 4:7)”

[Tecnologias](#rocket-tecnologias) | [Instalação](#computer-instalação)

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [Nodemailer](https://nodemailer.com)
- [Handlebars](https://handlebarsjs.com/)
- [Redis](https://redis.io/)
- [Bee-Queue](https://github.com/bee-queue/bee-queue)
- [React](https://reactjs.org/)
- [React-Native](https://reactnative.dev/)
- [React-Redux](https://redux.js.org/basics/usage-with-react)
- [Redux-Saga](https://github.com/redux-saga/redux-saga)

## :computer: Instalação

Faça um clone desse repositório.

### Pré-requisitos

- [Docker](https://www.docker.com/)

### Backend

- A partir da raiz do projeto, entre na pasta backend `cd backend`;
- Execute o comando `yarn` para instalar as dependências;
- Execute o comando `cp .env.example .env` e preencha o arquivo `.env` com `suas` variáveis de ambiente, para que tudo funcione perfeitamente;

Agora vamos instalar duas imagens bancos de dados: 

- Primeiro vamos instalar o Postgres, para armazenar nossas tabelas; 
Execute o comando: 
`docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres`

- Posteriormente, vamos instalar o Redis, o banco que vai gerenciar o envio de e-mails com filas com alta performance.

Execute o comando:
`docker run --name redis -p 6379:6379 -d -t redis:alpine`

Vamos configurar o banco de dados da aplicação:

- Crie um novo banco de dados *postgres* com o nome que colocou em *DB_HOST*

- Execute o comando `yarn sequelize db:migrate` para executar as migrations;

- Execute o comando `yarn sequelize db:seed:all` para executar as seed;


Ainda na pasta backend, vamos colocar o servidor para rodar 

Execute o comando `yarn dev` para colocar o servidor node para rodar;
Em outro prompt, execute o comando `yarn queue` e deixe rodando para gerenciar a fila de emails

### Frontend
- A partir da raiz do projeto, entre na pasta frontend `cd frontend`;
- Execute o comando `yarn` para instalar todas as dependências;
- Execute o comando `yarn start` para executar a aplicação;
- Aguarde o browser abrir com o url da aplicação;

Pronto, agora é só explorar o  web app ;)
Lembrando que o servidor reflete as ações do usuário administrador.

- Dados para login: 
- usuario: admin@fastfeet.com, senha: 123456

### Mobile

> OBS.: O aplicativo mobile só foi testado para android

- A partir da raiz do projeto, entre na pasta mobile `cd mobile`;
- Execute o comando `yarn` para instalar todas as dependências;

Utilizando um software como o `Genymotion`, crie um dispositivo emulador para rodar o aplicativo ou se preferir, conecte um smartphone android em seu computador através do cabo USB, e certifique-se de que está hablitado nas opções de desenvolvedor de seu aparelho a depuração por USB;
- Execute o comando `react-native run-android` para instalar o aplicativo em um smartphone ou emulador

Pronto, agora é só explorar o app ;)
Vale salientar que o aplicativo reflete as ações do entregador/deliveryman

- Fata efetuar o login, utilize um ID númerico de um deliveryman cadastrado

---
Desenvolvido por [Sandro Santos](https://www.linkedin.com/in/sandrossantos/) | https://github.com/sandro-dev


