const express = require('express');
const { gql } = require('apollo-server-express');
const { ApolloServer } = require('apollo-server-express');
import { resolvers } from './resolvers/resolvers';
import { typeDefs } from './schemas/typeDefs';

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startApolloServer(typeDefs, resolvers);
