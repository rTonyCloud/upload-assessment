import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './Globalstyling.scss'
import { client, ApolloProvider } from './graphql/apollo.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Suspense fallback="loading">
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</Suspense>
	</React.StrictMode>,
)
