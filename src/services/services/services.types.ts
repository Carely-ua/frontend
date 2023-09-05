import { CategoryFragment } from './graphql/__generated__/Category.fragment';
import { GetServicesQuery } from './graphql/__generated__/GetClinicServices';
import { GetConsultationsQuery } from './graphql/__generated__/GetConsultations';

export type Consultation = NonNullable<GetConsultationsQuery['getCategories']>[number];

export type Category = CategoryFragment | null;
export type Categories = Array<Category>;

export type ClinicServiceData = NonNullable<GetServicesQuery['getServices']>;
export type Services = NonNullable<ClinicServiceData[number]>['services'];
export type Service = NonNullable<Services>[number];
export type Doctors = NonNullable<
  NonNullable<NonNullable<ClinicServiceData[number]>['services']>[number]
>['doctors'];
export type Doctor = NonNullable<NonNullable<Doctors>[number]>;
