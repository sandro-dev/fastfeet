<h1 align="center">
    <img src="https://raw.githubusercontent.com/sandro-dev/fastfeet/master/.github/logo.png">
</h1>

# Fastfeet App :truck:
Trata-se de uma aplicação para gerenciamento de encomendas/delivery para uma distribuidora ficitícia, a FastFeet.

O gerenciamento é todo feito pela interface web, enquanto os entregadores utilizam uma aplicação mobile para visualizar as encomendas pedentes, as já finalizadas, informar um problema e confirmar uma entrega.

<br />

> “A sabedoria é a coisa principal; adquire pois a sabedoria, emprega tudo o que possuis na aquisição de entendimento.” (Provérbios 4:7)”

## Indíce

- [Sobre](#book-Sobre)
- [Funcionalidades](#hammer-Funcionalidades)
- [Tecnologias](#gear-Tecnologias)
- [Instalação](#computer-Instalação)
  - [Instalação do Backend](#computer-Backend)
  - [Instalação do Frontend ](#computer-Frontend)
  - [Instalação do App Mobile ](#iphone-Mobile)
- [Screenshots](#camera-Screnshots)
- [Licença](#memo-Licença)

## :book: Sobre
  A aplicação faz parte do Desafio Final do Bootcamp da Rocketseat. Esse código corresponde ao desafio completo, incluindo o backend, frontend e app mobile do Fastfeet.


## :hammer: Funcionalidades

- Autenticação utilizando JSON Web Token (JWT);
- Validação dos dados de entrada;
- Gestão de destinatários;
- Gestão de entregadores;
- Gestão de encomendas;
- Gerenciamento dos problemas de entrega;
- O entregador pode informar um problema pelo app mobile;
- Controle do horário para retirada das encomendas;
- Após a entrega, o entregador tira uma foto da assinatura do destinaráriopara comprovar a entrega

## :gear: Tecnologias

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

## :wrench: Instalação

Faça um clone desse repositório utilizando o comando `git clone` ou faça download.

```bash
  git clone https://github.com/sandro-dev/fastfeet.git
```

### Pré-requisitos

- [Docker](https://www.docker.com/)

### :computer: Backend

- A partir da raiz do projeto, entre na pasta backend:

```bash
  cd backend
  ```

- Execute o comando `yarn` para instalar as dependências:
```bash
    yarn
  ```

- Execute o comando `cp .env.example .env` e preencha o arquivo `.env` com `suas` variáveis de ambiente, para que tudo funcione perfeitamente;

Agora vamos instalar duas imagens de bancos de dados: 

- Primeiro vamos instalar o Postgres, para armazenar nossas tabelas. Execute o seguinte comando no terminal:

```bash
  docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

- Posteriormente, vamos instalar o Redis, o banco que vai gerenciar o envio de e-mails com filas com alta performance. Execute o comando:

```bash    
  docker run --name redis -p 6379:6379 -d -t redis:alpine
```

Vamos configurar o banco de dados da aplicação:

- Crie um novo banco de dados *postgres* com o nome que colocou em *DB_HOST*

- Rode o comando abaixo para executar as migrations, e criar as tabelas no banco de dados;

```bash    
  yarn sequelize db:migrate
```

Agora, vamos popular a tabela `users` com o usuário administrador:

```bash    
  yarn sequelize db:seed:all
```

Ainda na pasta backend, vamos colocar o servidor para rodar.

```bash
  yarn dev
```

Em outro prompt/terminal, execute o seguinte comando e deixe rodando para gerenciar a fila de emails
```bash
  yarn queue
```


### :computer: Frontend
- A partir da raiz do projeto, entre na pasta frontend:
  ```bash
  cd frontend
  ```

- Execute o comando yarn para instalar todas as dependências;
```bash
  yarn
  ```

- Execute o seguinte comando para executar a aplicação;
```bash
  yarn start
  ```

- Aguarde o browser abrir com o url da aplicação;

Pronto, agora é só explorar o  web app ;)
Lembrando que o servidor reflete as ações do usuário administrador.

- Dados para login: 
- usuario: admin@fastfeet.com, senha: 123456

### :iphone: Mobile

> OBS.: O aplicativo mobile só foi testado para android

- A partir da raiz do projeto, entre na pasta mobile :
```bash
    cd mobile
  ```

- Execute o comando `yarn` para instalar todas as dependências;
```bash
    yarn
  ```

Utilizando um software como o `Genymotion`, crie um dispositivo emulador para rodar o aplicativo ou se preferir, conecte um smartphone android em seu computador através do cabo USB, e certifique-se de que está hablitado nas opções de desenvolvedor de seu aparelho a depuração por USB;

- Execute o comando abaixo para instalar o aplicativo em um smartphone ou emulador
```bash
  react-native run-android
  ```

Pronto, agora é só explorar o app ;)
Vale salientar que o aplicativo reflete as ações do entregador/deliveryman

- Fata efetuar o login, utilize um ID númerico de um deliveryman cadastrado

## :camera: Screenshots
<img src="https://raw.githubusercontent.com/sandro-dev/fastfeet/master/screenshots/web/print-01.png" />
<img src="https://raw.githubusercontent.com/sandro-dev/fastfeet/master/screenshots/web/print-02.png" />
<img src="https://raw.githubusercontent.com/sandro-dev/fastfeet/master/screenshots/web/print-04.png" />
<img src="https://raw.githubusercontent.com/sandro-dev/fastfeet/master/screenshots/web/print-04b.png" />
<img src="https://raw.githubusercontent.com/sandro-dev/fastfeet/master/screenshots/web/print-06.png" />
<img src="https://raw.githubusercontent.com/sandro-dev/fastfeet/master/screenshots/web/print-07.png" />
<img src="https://raw.githubusercontent.com/sandro-dev/fastfeet/master/screenshots/web/print-08.png" />
<img src="https://raw.githubusercontent.com/sandro-dev/fastfeet/master/screenshots/web/print-09.png" />
<img src="https://raw.githubusercontent.com/sandro-dev/fastfeet/master/screenshots/web/print-11.png" />

> mobile

<img src="https://raw.githubusercontent.com/sandro-dev/fastfeet/master/screenshots/mobile/print-01.png" />

<img src="https://raw.githubusercontent.com/sandro-dev/fastfeet/master/screenshots/mobile/print-02.png" />

<img src="https://raw.githubusercontent.com/sandro-dev/fastfeet/master/screenshots/mobile/print-03.png" />

<img src="https://raw.githubusercontent.com/sandro-dev/fastfeet/master/screenshots/mobile/print-04.png" />

<img src="https://raw.githubusercontent.com/sandro-dev/fastfeet/master/screenshots/mobile/print-05.png" />

<img src="https://raw.githubusercontent.com/sandro-dev/fastfeet/master/screenshots/mobile/print-06.png" />

<img src="https://raw.githubusercontent.com/sandro-dev/fastfeet/master/screenshots/mobile/print-07.png" />

<img src="https://raw.githubusercontent.com/sandro-dev/fastfeet/master/screenshots/mobile/print-08.png" />


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by [Sandro Santos](https://www.linkedin.com/in/sandrossantos/) 
  [Me siga no Github](https://github.com/sandro-dev)
  [Me add no LinkedIn](https://www.linkedin.com/in/sandrossantos/)