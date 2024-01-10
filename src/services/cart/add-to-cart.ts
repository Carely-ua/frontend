import { useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { useSnackbar } from 'notistack';
import { AddToCartDocument, AddToCartMutationVariables } from './graphql/__generated__/AddToCart';
import { AddToCartUnAuthDocument } from './graphql/__generated__/AddToCartUnAuth';
import { useCartForUnAuthUser } from './cart-for-un-auth-user';

export const useAddToCart = () => {
  const [_addToCart] = useMutation(AddToCartDocument);
  const [_addToCartUnAuth] = useMutation(AddToCartUnAuthDocument);
  const { data: session } = useSession();
  const { addNewItem } = useCartForUnAuthUser();
  const { enqueueSnackbar } = useSnackbar();

  const addToCart = async (input: AddToCartMutationVariables['input']) => {
    if (session) {
      await _addToCart({
        variables: { input },
        refetchQueries: ['GetCart'],
        context: {
          headers: {
            Authorization: `Bearer ${session?.user?.token}`,
          },
        },
      });
    } else {
      const { data } = await _addToCartUnAuth({
        variables: { input },
        refetchQueries: ['GetCart'],
      });
      addNewItem(data?.createCartItemUnAuth?.id);
    }
    enqueueSnackbar('Послуга успішно додана в кошик', { variant: 'snackbar' });
  };

  return { addToCart };
};
