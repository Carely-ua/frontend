import { GetClinicsQuery } from './graphql/__generated__/GetClinics';

export type Clinic = NonNullable<GetClinicsQuery['getClinics']>[number];
export type { ClinicType } from '@/utils/graphql/__generated__/types';
