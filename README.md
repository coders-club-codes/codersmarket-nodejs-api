
# CodersMarket NodeJS API
An api-based application focused on analyzing the main aspects of a REST API using [NodeJS](https://nodejs.org/en/) and [Express](https://expressjs.com/pt-br/).

-------

## What's the idea? 
We're creating a simple but meaningful little Market API in which we will be able to keep tracking of the cash flow of a little market.

## Where to start?

You can follow along with our guided live code class right here: [AULA #47 - CRIANDO UMA API COMPLETA COM NODE E EXPRESS](https://www.youtube.com/watch?v=P1rNAuPieUs&ab_channel=CodersClub).

Also, to know a bit more about NodeJS and why are we using this technology, you can see our previous class (where we introduce you to NodeJS tendencies with what's new about it and about the world we live in) here: [AULA #44 - ECOSISTEMA DO NODE JS EM 2021](https://www.youtube.com/watch?v=0QIs-UNgoQM&t=1972s&ab_channel=CodersClub)

## Recommended VS Code extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

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
  ```

### 2. Run the command to install the dependencies
  ```bash
  npm install
  ```

## Commands

### Running the project

  ```bash
  npm start
  ```

### Running the development server for live-reloading

  ```bash
  npm run dev
  ```

## License

This project is licensed under the MIT License.
