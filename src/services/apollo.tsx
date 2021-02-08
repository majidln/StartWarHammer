import 'cross-fetch/polyfill';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {BASE_URL} from '@services/constants';

const cache = new InMemoryCache({});

// Initialize Apollo Client
const client = new ApolloClient({
  uri: BASE_URL,
  cache,
});

export default client;
