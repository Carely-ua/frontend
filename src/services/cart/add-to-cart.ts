import { useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { AddToCartDocument, AddToCartMutationVariables } from './graphql/__generated__/AddToCart';
import { AddToCartUnAuthDocument } from './graphql/__generated__/AddToCartUnAuth';
import { useCartForUnAuthUser } from './cart-for-un-auth-user';

export const useAddToCart = () => {
  const [_addToCart] = useMutation(AddToCartDocument);
  const [_addToCartUnAuth] = useMutation(AddToCartUnAuthDocument);
  const { data: session } = useSession();
  const { addNewItem } = useCartForUnAuthUser();

  const addToCart = async (input: AddToCartMutationVariables['input']) => {
    if (session) {
      return await _addToCart({
        variables: { input },
        refetchQueries: ['GetCart'],
        context: {
          headers: {
            Authorization: `Bearer ${session?.user?.token}`,
          },
        },
      });
    }

    const { data } = await _addToCartUnAuth({
      variables: { input },
      refetchQueries: ['GetCart'],
    });
    addNewItem(data?.createCartItemUnAuth?.id);
  };

  return { addToCart };
};
