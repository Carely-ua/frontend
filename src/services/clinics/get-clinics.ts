import { gql } from '@apollo/client';
import { query } from '@/utils';
import { GetClinicsDocument } from './graphql/__generated__/GetClinics';

export const getClinics = async () => {
  const { data } = await query({
    query: GetClinicsDocument,
    variables: { filters: {} },
  });

  return data;
};
