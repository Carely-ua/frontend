import { mutate } from '@/utils';
import {
  SignInDocument,
  SignInMutation,
  SignInMutationVariables,
} from './graphql/__generated__/SignIn';

export const signIn = async (input: SignInMutationVariables['input']) => {
  const { data } = await mutate<SignInMutation, SignInMutationVariables>({
    mutation: SignInDocument,
    variables: {
      input,
    },
  });

  return { data };
};
