import { useSession } from 'next-auth/react';
//TODO check if it's correct import
import { useLazyQuery } from '@apollo/client';
import { useCallback, useEffect } from 'react';
import { GetCartDocument } from './graphql/__generated__/GetCart';
import { GetUnAuthCartDocument } from './graphql/__generated__/GetUnAuthCart';
import { useCartForUnAuthUser } from './cart-for-un-auth-user';

export const useGetCart = () => {
  const { data: session } = useSession();
  const { getCartIds } = useCartForUnAuthUser();
  const [getCart, { data: authCartData }] = useLazyQuery(GetCartDocument);
  const [_getUnAuthCart, { data: unAuthCartData, previousData }] =
    useLazyQuery(GetUnAuthCartDocument);

  const token = session?.user?.token;

  const getUnAuthCart = useCallback(() => {
    const ids = getCartIds();
    _getUnAuthCart({ variables: { ids } });
  }, [_getUnAuthCart, getCartIds]);

  useEffect(() => {
    window.addEventListener('storage', getUnAuthCart);

    return () => window.removeEventListener('storage', getUnAuthCart);
  }, [getCartIds, getUnAuthCart]);

  useEffect(() => {
    if (token) {
      getCart({
        context: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      });
    } else {
      getUnAuthCart();
    }
  }, [getCart, getCartIds, getUnAuthCart, token]);

  return {
    data: token ? authCartData?.cart : unAuthCartData?.cartUnAuth || previousData?.cartUnAuth,
  };
};
