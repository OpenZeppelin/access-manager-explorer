## Access Manager Explorer

An UI interface for OpenZeppelin Access Manager.

## Getting Started

Create a copy of the `env.example` into a fresh `.env` file, and fill in the values. Then, install the dependencies:

```bash
yarn install
```

## Running the app

In order to start a development server, run:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the UI.

### Changing GraphQL queries

This project uses [GraphQL Code Generator](https://graphql-code-generator.com/) to generate TypeScript types for the GraphQL queries. In order to update the types, run:

```bash
yarn codegen
```
