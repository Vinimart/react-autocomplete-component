# Deel Autocomplete Assessment

This repository contains a React project built using Vite. It includes an Autocomplete component that allows users to search for movies and get suggestions as they type.

## Getting Started

To run this project locally, follow these steps:

1. Clone the private repository to your local machine (**If you have the zip file, you can skip this step**):

```bash
git clone https://github.com/Vinimart/deel-autocomplete-assessment.git
```

2. Navigate to the project directory:

```bash
cd deel-autocomplete-assessment
```

Important: Make sure you have **Node.js** installed, preferably LTS version. If not, you can download it [here](https://nodejs.org/en/download/).
Also make sure you have a package manager installed. This project uses yarn, but you can use npm if you prefer.

3. Install the dependencies:

```bash
npm install
# or
yarn install
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

DONE! The project will now be available at `http://localhost:3000`, and you can view it in your web browser.

## Building the Project

To build the project for production, run the following command:

```bash
npm run build
# or
yarn build
```

This will create a production-ready build in the `dist` directory.

## Running unit/component Tests

### Unit Tests

To run unit tests, use the following command:

```bash
npm test:unit
# or
yarn test:unit
```

### End-to-End (E2E) Tests

To run end-to-end tests using Cypress, execute the following command:

```bash
npm run test:e2e
# or
yarn test:e2e
```

Cypress will open and run the E2E tests in your default browser.

## Storybook (UI Components Showcase & Documentation)

This project uses Storybook to showcase UI components. To run Storybook, use the following command:

```bash
npm run storybook
# or
yarn storybook
```

You may need storybook CLI installed globally. If so, run the following command:

```bash
npm install -g @storybook/cli
# or
yarn global add @storybook/cli
```

This will start the Storybook development server, and you can view the UI components at `http://localhost:6006`.
