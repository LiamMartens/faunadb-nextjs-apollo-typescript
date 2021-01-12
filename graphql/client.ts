import { ApolloClient, InMemoryCache } from '@apollo/client';

export const ApiClient = new ApolloClient({
    uri: 'https://graphql.fauna.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_KEY}`
    }
})