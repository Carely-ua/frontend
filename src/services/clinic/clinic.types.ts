import { GetClinicsQuery } from './graphql/__generated__/GetClinics';

export type Clinics = NonNullable<GetClinicsQuery['getClinics']>;
export type Clinic = Clinics[number];
export type { ClinicType } from '@/utils/graphql/__generated__/types';
