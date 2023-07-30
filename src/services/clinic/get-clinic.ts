import { gql } from '@apollo/client';
import { query } from '@/utils';
import { GetClinicDocument } from './graphql/__generated__/GetClinic';

export const getClinic = async (id: string) => {
  const { data } = await query({
    query: GetClinicDocument,
    variables: {
      filters: {
        id,
      },
    },
  });

  return { data };
};
