
# CodersMarket NodeJS API
An api-based application focused on analyzing the main aspects of a REST API using [NodeJS](https://nodejs.org/en/) and [Express](https://expressjs.com/pt-br/). The user authentication uses [JWT](https://jwt.io/) and to save our data we're integrating with the [Sequelize ORM](https://sequelize.org/), adding password-hashing hooks to keep everything safer.

-------

## What's the idea? 
We're creating a simple but meaningful little Market API in which we will be able to keep tracking of the cash flow of a little market.

## Where to start?

You can follow along with our guided live code class right here: [AULA #47 - CRIANDO UMA API COMPLETA COM NODE E EXPRESS](https://www.youtube.com/watch?v=P1rNAuPieUs&ab_channel=CodersClub).

Also, to know a bit more about NodeJS and why are we using this technology, you can see our previous class (where we introduce you to NodeJS tendencies with what's new about it and about the world we live in) here: [AULA #44 - ECOSISTEMA DO NODE JS EM 2021](https://www.youtube.com/watch?v=0QIs-UNgoQM&t=1972s&ab_channel=CodersClub)

In general, the best order to watch the classes is the following one:
* [AULA #44 - ECOSISTEMA DO NODE JS EM 2021](https://www.youtube.com/watch?v=0QIs-UNgoQM&t=1972s&ab_channel=CodersClub)
* [AULA #47 - CRIANDO UMA API COMPLETA COM NODE E EXPRESS](https://www.youtube.com/watch?v=P1rNAuPieUs&ab_channel=CodersClub).
* [AULA #51 - AUTENTICAÇÃO NO NODE COM JWT E BCRYPT](https://youtu.be/dVa1_BvNbOs)

## Recommended VS Code extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Current project architecture 

```
project
│   README.md
│   .sequelizerc
│   .env
│   .env.example
│   .gitignore
│   package.json
│
└───src
│   │   app.js
│   │   index.js
│   │   routes.js
│   │
│   └───app
│   │   │   teamRepository.js
│   │   │
│   │   └───controllers
│   │   │   │   UsersController/*
│   │   │   │   ProductsController.js
│   │   │  
│   │   └───middlewares
│   │   │   │   auth.js
│   │   │   │   logger.js
│   │   │  
│   │   └───models
│   │   │   │   Product.js
│   │   │   │   User.js
│   │   │   │   index.js
│   │   │  
│   └───config
│   │   │   auth.js
│   │   │   sequelize.js
│   │  
│   └───database
│   │   │   index.js
│   │   │
│   │   └───migrations/*
│   │   │  
│   │   └───seeders/*
│   │   │  
│   │   ...
```
## Project Setup

### 1. Create a file called `.env` based on the `.env.example` 
It is here to show what are the keys we're using in our environment configuration without exposing their values.
  > Tip: You can simply copy and remane it
  ```bash
  cp .env.example .env
  ```
  And then set up their values, the expected file should look like this:
  ```txt
    NODE_ENV=development
    NODE_PORT=3000

    ...
  ```

### 2. Run the command to install the dependencies
  ```bash
  npm install
  ```

### 3. Make sure you have your database configured and well setted up

  If you are using docker, there's an example of how to set up your mysql container:
  ```sh
    docker run --name mysql-coders -e MYSQL_ROOT_HOST=% -e MYSQL_ROOT_PASSWORD=root@123 -p 3306:3306 -d mysql/mysql-server:latest
  ```
## Commands

### Building the project

  ```bash
  npm run build
  ```

### Running the project
> Tip: remember to build before starting
  ```bash
  npm start
  ```

### Running the development server for live-reloading

  ```bash
  npm run dev
  ```

### Syncing database migrations

  ```bash
  npx sequelize-cli db:migrate
  ```
## Docs

  There is an Insomnia export json that you can import in your Insomnia to see the current requests created.

## License

This project is licensed under the MIT License.
