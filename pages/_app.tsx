import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import { ApiClient } from '../graphql/client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={ApiClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
