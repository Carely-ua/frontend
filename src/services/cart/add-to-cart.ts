import { useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { AddToCartDocument, AddToCartMutationVariables } from './graphql/__generated__/AddToCart';

export const useAddToCart = () => {
  const [_addToCart, { data }] = useMutation(AddToCartDocument);
  const { data: session } = useSession();

  const addToCart = async (input: AddToCartMutationVariables['input']) => {
    return await _addToCart({
      variables: { input },
      refetchQueries: ['GetCart'],
      context: {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      },
    });
  };

  return { addToCart };
};
