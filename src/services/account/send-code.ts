import { useMutation } from '@apollo/client';
import { useCallback } from 'react';
import { SendCodeDocument } from './graphql/__generated__/SendCode';

export const useSendCode = () => {
  const [_sendCode] = useMutation(SendCodeDocument);

  const sendCode = useCallback(
    async (phone: string) => {
      await _sendCode({ variables: { phone } });
    },
    [_sendCode],
  );

  return { sendCode };
};
