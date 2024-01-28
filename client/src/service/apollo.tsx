import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache(),
	link: createUploadLink({
		uri: 'http://localhost:4000/graphql',
	}),
})

export { client, ApolloProvider }
