import { query } from '@/utils/server';
import { GetClinicsDocument, GetClinicsQueryVariables } from './graphql/__generated__/GetClinics';

export const getClinics = async (filters: GetClinicsQueryVariables['filters'] = {}) => {
  const { data } = await query({
    query: GetClinicsDocument,
    variables: { filters },
  });

  return { data };
};
