import { useMutation } from '@apollo/client';
import { useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { LinkCartItemToUserDocument } from './graphql/__generated__/LinkCartItemToUser';
import { useCartForUnAuthUser } from './cart-for-un-auth-user';

export const useLinkCartItems = () => {
  const [_linkCartItemToUser] = useMutation(LinkCartItemToUserDocument);
  const { data: session } = useSession();
  const { getCartIds, clearIds } = useCartForUnAuthUser();

  const linkCartItems = useCallback(async () => {
    const ids = getCartIds();
    const itemAmount = ids.length;

    if (itemAmount === 0) return 0;
    await _linkCartItemToUser({
      variables: {
        ids,
      },
      context: {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      },
    });
    clearIds();

    return itemAmount;
  }, [_linkCartItemToUser, clearIds, getCartIds, session?.user?.token]);

  return { linkCartItems };
};
