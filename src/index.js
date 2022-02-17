import React from "react";

import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { HttpLink } from "apollo-link-http";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

const link = new HttpLink({
  uri: "https://graphqlpokemon.favware.tech/",
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
  name: "graphql-pokemon-client",
  version: "1.0",
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
