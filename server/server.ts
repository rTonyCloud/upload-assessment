const { ApolloServer } = require('apollo-server-express')
import { typeDefs } from './schemas/typeDefs'
import { resolvers } from './schemas/resolvers'
import { ConnectDB } from './config/connection'
import express from 'express'
import cors from 'cors'
import { PORT, API_SERVER, corsOptions, MAX_FILE_SIZE, MAX_FILES } from './helper/dotEnv'
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core')
const { graphqlUploadExpress } = require('graphql-upload')
async function startApolloServer(typeDefs: any, resolvers: {}) {
	const app = express()

	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))
	app.use(cors(corsOptions))

	app.use(graphqlUploadExpress({ maxFileSize: MAX_FILE_SIZE, maxFiles: MAX_FILES }))
	app.use('/uploads', express.static('/server/uploads'))

	// mongoose connection
	ConnectDB()

	const server = new ApolloServer({
		typeDefs,
		resolvers,
		csrfPrevention: true,
		cache: 'bounded',
		plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
	})

	await server.start()
	server.applyMiddleware({ app: app as any })

	try {
		app.listen({ port: PORT }, () => {
			console.log(
				`🚀 Server ready at ${API_SERVER} ` +
					` graphql playground ready at ${API_SERVER}${server.graphqlPath}`,
			)
		})
	} catch (err) {
		console.log('Error in starting server', err)
	}
}

startApolloServer(typeDefs, resolvers)
