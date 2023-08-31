import { CategoryFragment } from './graphql/__generated__/Category.fragment';
import { GetServicesQuery } from './graphql/__generated__/GetClinicServices';
import { GetConsultationsQuery } from './graphql/__generated__/GetConsultations';

export type Consultation = NonNullable<GetConsultationsQuery['getCategories']>[number];

export type Category = CategoryFragment | null;
export type Categories = Array<Category>;
export type Services = NonNullable<
  NonNullable<
    NonNullable<NonNullable<GetServicesQuery['getServices']>[number]>['subTitles']
  >[number]
>['services'];
export type Service = NonNullable<Services>[number];
export type Doctors = NonNullable<Service>['doctors'];
export type Doctor = NonNullable<NonNullable<Doctors>[number]>;
