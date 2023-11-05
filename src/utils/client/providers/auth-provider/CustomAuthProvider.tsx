'use client';

import { FC, ReactNode, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useLinkCartItems } from '@/services/cart/createUnAuthOrder';
import { GetCartDocument } from '@/services/cart/graphql/__generated__/GetCart';
import { useCreateOrder } from '@/services/cart/create-order';

interface CustomAuthProviderProps {
  children: ReactNode;
}

export const CustomAuthProvider: FC<CustomAuthProviderProps> = ({ children }) => {
  const { linkCartItems } = useLinkCartItems();
  const { data: session } = useSession();
  const client = useApolloClient();
  const { createOrder } = useCreateOrder();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (session?.user.token) {
        const itemAmount = await linkCartItems();
        await client.refetchQueries({ include: [GetCartDocument] });
        if (itemAmount > 0) {
          await createOrder();
          router.push('/account/orders');
        }
      }
    })();
  }, [client, createOrder, linkCartItems, router, session?.user.token]);

  return children;
};
