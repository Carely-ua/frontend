import 'server-only';
import { ApolloClient, HttpLink } from '@apollo/client';
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { getServerSession } from 'next-auth/next';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      //TODO move it to env file
      uri: 'https://backend.carely.com.ua/graphql',
    }),
  });
});

export const query: ApolloClient<any>['query'] = async options => {
  const session = await getServerSession(authOptions);

  return await getClient().query({
    ...options,
    context: {
      headers: {
        Authorization: `Bearer ${session?.user?.token}`,
      },
    },
  });
};

export const mutate: ApolloClient<any>['mutate'] = async options => {
  const session = await getServerSession(authOptions);

  return await getClient().mutate({
    ...options,
    //@ts-ignore
    context: {
      headers: {
        Authorization: `Bearer ${session?.user?.token}`,
      },
    },
  });
};
