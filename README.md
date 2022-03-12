# valchy-swap

A university project to demonstrate my first web 3.0 app. Basically you can send test ETH from one crypto wallet to another. Everything works on the Rinkeby ethereum test network. You can get test eth from [here](https://faucets.chain.link/rinkeby). Also make sure to have the metamask chrome extension installed and have two different accounts to which you can send crypto to.

## Installation

1. Install all the packages with `yarn` inside the `main folder`, `smart_contract` and `studio`
2. Run `yarn dev` for development or `yarn build` for production in main folder
3. `cd` into `smart_contract` and run `sanity init`
4. The run run `yarn compile` then `yarn deploy`
5. `cd` into `studio` and run `yarn start` for development or `yarn build` for production

## Links

-   Main App [https://swap.valchy.com/](https://swap.valchy.com/)
-   Storybook [https://storybook.swap.valchy.com/](https://storybook.swap.valchy.com/)
-   Sanity [https://sanity.swap.valchy.com](https://sanity.swap.valchy.com)

## Tech Stack

-   `Next.js` as the server
-   `React` for the frontend
-   `Tailwind` for the frontend styling
-   `Storybook` for developing react UI components
-   `Solidity` for smart contracts on the ethereum blockchain network
-   `Metamask` to send crypto from one wallet address to another
-   `Hardhat` to deploy our smart contract on a test ethereum network
-   `Sanity` for the database and admin panel of the app
-   `Cypress` / `Jest` for e2e and unit testing
-   `ESLint` / `Prettier` to lint and maintain code rules throughout the app
-   `Husky` / `Github Actions` to perform automatic pre-commit and after each commit tests
-   (`typescript`) a little touch of typescript here and there

## GitHub Actions

[![Lint + Prettier Application](https://github.com/Valchy/valchy-swap/actions/workflows/node.js.yml/badge.svg)](https://github.com/Valchy/valchy-swap/actions/workflows/node.js.yml)

Happy Hacking :)
