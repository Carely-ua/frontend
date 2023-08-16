import { GetClinicsQuery } from './graphql/__generated__/GetClinics';
import { GetClinicsWithServicesQuery } from './graphql/__generated__/GetClinicsWithServices';

export type Clinics = NonNullable<GetClinicsQuery['getClinics']>;
export type Clinic = Clinics[number];
export type { ClinicType } from '@/utils/graphql/__generated__/types';
export type ClinicsWithServices = NonNullable<GetClinicsWithServicesQuery['getClinics']>;
export type ClinicWithServices = ClinicsWithServices[number];
export type ClinicServices = NonNullable<ClinicWithServices>['services'];
