import { useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import {
  CreateReviewDocument,
  CreateReviewMutationVariables,
} from './graphql/__generated__/CreateReview';

export const useCreateReview = () => {
  const { data: session } = useSession();
  const [createReviewHandler] = useMutation(CreateReviewDocument);

  const createReview = async (input: CreateReviewMutationVariables['input']) => {
    return await createReviewHandler({
      variables: {
        input,
      },
      context: {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      },
    });
  };

  return { createReview };
};
