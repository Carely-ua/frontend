import { useMutation } from '@apollo/client';
// import { mutate } from '@/utils/server';
import { useSession } from 'next-auth/react';
import {
  AddToCartDocument,
  AddToCartMutation,
  AddToCartMutationVariables,
} from './graphql/__generated__/AddToCart';
// import {
//   useM
// } from '@apollo/experimental-nextjs-app-support/ssr';

export const useAddToCart = () => {
  const [_addToCart, { data }] = useMutation(AddToCartDocument);
  const { data: session } = useSession();

  const addToCart = async (input: AddToCartMutationVariables['input']) => {
    return await _addToCart({
      variables: { input },
      context: {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      },
    });
  };

  return { addToCart };
};

// export const addToCart = async (input: AddToCartMutationVariables['input']) => {
//   const { data } = await mutate<AddToCartMutation, AddToCartMutationVariables>({
//     mutation: AddToCartDocument,
//     variables: {
//       input,
//     },
//   });

//   return { data };
// };
