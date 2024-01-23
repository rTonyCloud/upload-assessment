import { gql } from 'apollo-server-express'
const typeDefs = gql`
  type Query {
    hello: String
  }
`
module.exports = typeDefs
