import { mutate } from '@/utils';
import {
  SignInDocument,
  SignInMutation,
  SignInMutationVariables,
} from './graphql/__generated__/SignIn';

export const signIn = async (input: SignInMutationVariables['input']) => {
  const { data, errors } = await mutate<SignInMutation, SignInMutationVariables>({
    mutation: SignInDocument,
    variables: {
      input,
    },
  });
  console.log('error', errors);

  return { data };
};
