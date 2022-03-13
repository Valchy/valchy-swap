# valchy-swap

[![Cypress Tests](https://github.com/Valchy/valchy-swap/actions/workflows/cypress-tests.js.yml/badge.svg)](https://github.com/Valchy/valchy-swap/actions/workflows/cypress-tests.js.yml)
[![Lint + Prettier Application](https://github.com/Valchy/valchy-swap/actions/workflows/lint-prettier.js.yml/badge.svg)](https://github.com/Valchy/valchy-swap/actions/workflows/lint-prettier.js.yml)

A university project to demonstrate my first web 3.0 app. It allows you to send test ETH from one crypto wallet to another using the [metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en) chrome extension. Everything works on the [rinkeby](https://www.rinkeby.io/) ethereum test network and is deployed using [hardhat](https://hardhat.org/).

## Links

-   Main App [https://swap.valchy.com/](https://swap.valchy.com/)
-   Storybook [https://storybook.swap.valchy.com/](https://storybook.swap.valchy.com/)
-   Sanity [https://sanity.swap.valchy.com](https://sanity.swap.valchy.com)

## Before Installing

Before starting the installation process make sure to install [fnm](https://github.com/Schniz/fnm) so that husky works properly. As well as that make sure to create an account in [sanity](https://www.sanity.io), [alchemy.io](https://dashboard.alchemyapi.io/) and [metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en).

In addition to this, please follow all the `.env.example` instructions inside the files. Create the appropriate projects and get the respective API keys and IDs. A lot of the installation below is dependant on correct `.env` file configurations. For each `.env.example` file please create a corresponding `.env` file.

### Important

You can get test ETH to your meta mask wallets from [here](https://faucets.chain.link/rinkeby)!

## Installations

#### Main App Frontend

1. `cd` in the `main folder` (root directory) and
2. run `yarn install` to get all the packages
3. then `yarn dev` for starting the development server  
   or `yarn build` for building production files

##### Additional Scripts

-   `yarn lint` to lint and prettify your code base  
    -> likewise run `yarn lint --fix` to fix linting and prettier errors
-   `yarn cypress` to test your code base  
    -> make sure to have the correct url base set in the `cypress.json` file when running cypress tests.

#### Storybook Frontend Components UI

1. `cd` in the `main folder` (root directory) and
2. run `yarn storybook` for the development environment
3. or `yarn build-storybook` to build the production static files

#### Sanity Backend

1. `cd` into the `studio` directory
2. then `yarn install` to get all the packages
3. and `yarn init` to init sanity backend (with promo boosted account)
4. finally `yarn dev` for starting the development server  
   or `yarn build` for building the production static files

#### Smart Contract

1. `cd` into the `smart_contract` directory
2. then `yarn install` to get all the packages
3. do `yarn compile` to compile the smart contract and
4. finally `yarn deploy` to deploy the smart contract on a real blockchain network  
   on the [rinkeby](https://www.rinkeby.io/) ethereum test network using [hardhat](https://hardhat.org/)

## Tech Stack

#### Backend

-   `Next.js` as the server
-   `Sanity` for the database and admin panel of the app

#### Frontend

-   `React` for the frontend
-   `Tailwind` for the frontend styling
-   `Storybook` for developing react UI components

#### Blockchain and Smart Contracts

-   `Solidity` for smart contracts on the ethereum blockchain network
-   `Metamask` to send crypto from one wallet address to another
-   `Hardhat` to deploy our smart contract on a test ethereum network

#### Testing and Linting

-   `Cypress` for e2e, integration and unit testing
-   `ESLint` / `Prettier` to lint and maintain code rules throughout the app
-   `Husky` / `Github Actions` to perform automatic pre-commit and after each commit tests
-   (`typescript`) a little touch of typescript here and there

### Happy Hacking :)
