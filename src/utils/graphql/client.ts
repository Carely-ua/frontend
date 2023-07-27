import { ApolloClient, HttpLink } from '@apollo/client';
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: 'https://backend.carely.com.ua/graphql',
    }),
  });
});

export const query: ApolloClient<any>['query'] = async (...args) => {
  return await getClient().query(...args);
};
