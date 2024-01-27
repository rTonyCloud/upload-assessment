const { gql } = require('apollo-server-express')

const typeDefs = gql`
	scalar Upload

	type File {
		filename: String!
		mimetype: String!
		encoding: String!
		url: String!
		createdAt: String!
	}

	type Query {
		uploads: [File]
	}

	type Mutation {
		singleUpload(file: Upload!): File!
	}
`

export { typeDefs }
