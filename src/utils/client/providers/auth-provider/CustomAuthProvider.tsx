'use client';

import { FC, ReactNode, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useApolloClient } from '@apollo/client';
import { useLinkCartItems } from '@/services/cart/createUnAuthOrder';
import { GetCartDocument } from '@/services/cart/graphql/__generated__/GetCart';

interface CustomAuthProviderProps {
  children: ReactNode;
}

export const CustomAuthProvider: FC<CustomAuthProviderProps> = ({ children }) => {
  const { linkCartItems } = useLinkCartItems();
  const { data: session } = useSession();
  const client = useApolloClient();

  useEffect(() => {
    if (session?.user.token) {
      linkCartItems();
      client.refetchQueries({ include: [GetCartDocument] });
    }
  }, [client, linkCartItems, session?.user.token]);

  return children;
};
