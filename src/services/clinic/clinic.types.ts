import { GetClinicQuery } from './graphql/__generated__/GetClinic';
import { GetClinicsQuery } from './graphql/__generated__/GetClinics';
import { GetClinicsWithServicesQuery } from './graphql/__generated__/GetClinicsWithServices';
import { GetDoctorPageQuery } from './graphql/__generated__/GetDoctorPage';

export type Clinics = NonNullable<GetClinicsQuery['getClinics']>;
export type Clinic = Clinics[number];
export type Department = NonNullable<NonNullable<NonNullable<Clinic>['clinicDepartments']>[number]>;
export type { ClinicType } from '@/utils/graphql/__generated__/types';
export type ClinicsWithServices = NonNullable<GetClinicsWithServicesQuery['getClinics']>;
export type ClinicWithServices = ClinicsWithServices[number];
export type ClinicServices = NonNullable<ClinicWithServices>['services'];
export type Reviews = NonNullable<GetClinicQuery['clinic']>['reviews'];
export type Review = NonNullable<NonNullable<Reviews>[number]>;
export type Doctor = GetDoctorPageQuery[];
export type Service = GetDoctorPageQuery['service'];
export type ClinicPageData = NonNullable<GetClinicQuery['clinic']>;
