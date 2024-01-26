const { ApolloServer } = require('apollo-server-express')
import { typeDefs } from './schemas/typeDefs'
import { resolvers } from './schemas/resolvers'
const { ConnectDB } = require('./config/connection')

const express = require('express')
const cors = require('cors')
const { PORT, LOCALHOST_SERVER, corsOptions } = require('./helper/dotEnv')
const routes = require('./routes/index')

async function startApolloServer(typeDefs: Document, resolvers: {}) {
	const app = express()

	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))
	app.use(cors(corsOptions))

	// app.use(graphqlUploadExpress({ maxFileSize: MAX_FILE_SIZE, maxFiles: MAX_FILES }))

	// mongoose connection
	ConnectDB()

	//routes
	app.use('/api', routes)

	const server = new ApolloServer({ typeDefs, resolvers })

	await server.start()
	server.applyMiddleware({ app: app as any })

	app.listen({ port: PORT }, () =>
		console.log(`🚀 Server ready at ${LOCALHOST_SERVER}${server.graphqlPath}`),
	)
}

startApolloServer(typeDefs, resolvers)
