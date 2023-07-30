import { gql } from '@apollo/client';
import { query } from '@/utils';
import { GetClinicDocument } from './graphql/__generated__/GetClinic';

export const getClinic = async () => {
  const { data } = await query({
    query: GetClinicDocument,
    variables: { filters: {} },
  });

  return { data };
};
