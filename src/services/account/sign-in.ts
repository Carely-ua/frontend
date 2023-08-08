import { mutate } from '@/utils/server';
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
