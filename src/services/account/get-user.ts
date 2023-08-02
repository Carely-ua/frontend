import { query } from '@/utils';
import { GetUserDocument, GetUserQuery } from './graphql/__generated__/GetUser';

export const getUser = async () => {
  const { data } = await query<GetUserQuery>({
    query: GetUserDocument,
  });

  return { data };
};
