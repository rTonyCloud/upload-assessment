import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './Globalstyling.scss'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'

const uploadLink = createUploadLink({ uri: 'http://localhost:4000/graphql' })

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache(),
	link: uploadLink,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</Suspense>
	</React.StrictMode>,
)
