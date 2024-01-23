import { gql, ApolloServer } from 'apollo-server-express'
import {typeDefs} from './schemas/typeDefs.js'
import {resolvers} from './schemas/resolvers.js'
import express from 'express'

async function startApolloServer(typeDefs, resolvers) {
  const app = express()

  const server = new ApolloServer({ typeDefs, resolvers })

  await server.start()
  server.applyMiddleware({ app })

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  )
}

startApolloServer(typeDefs, resolvers)
