# valchy-swap

A university project to demonstrate my first web 3.0 app. Basically you can send test ETH from one crypto wallet to another using the [metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en) chrome extension. Everything works on the Rinkeby ethereum test network.

You can get test eth from [here](https://faucets.chain.link/rinkeby).

## Before Installing

Before starting the installation process make sure to install [fnm](https://github.com/Schniz/fnm) so that husky works properly and the correct node js version gets used. As well as that make sure to create an account in [sanity](https://www.sanity.io/cleverprogrammer), [alchemy.io](https://dashboard.alchemyapi.io/) and [metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en).

In addition to this, please follow all the `.env.example` instructions inside the files. Create the appropriate projects and get the respective API keys and IDs.

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
-   `Cypress` for e2e, integration and unit testing
-   `ESLint` / `Prettier` to lint and maintain code rules throughout the app
-   `Husky` / `Github Actions` to perform automatic pre-commit and after each commit tests
-   (`typescript`) a little touch of typescript here and there

## GitHub Actions

[![Cypress Tests](https://github.com/Valchy/valchy-swap/actions/workflows/cypress-tests.js.yml/badge.svg)](https://github.com/Valchy/valchy-swap/actions/workflows/cypress-tests.js.yml)

[![Lint + Prettier Application](https://github.com/Valchy/valchy-swap/actions/workflows/lint-prettier.js.yml/badge.svg)](https://github.com/Valchy/valchy-swap/actions/workflows/lint-prettier.js.yml)

Happy Hacking :)
