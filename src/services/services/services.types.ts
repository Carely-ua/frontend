import { CategoryFragment } from './graphql/__generated__/Category.fragment';
import { GetServicesQuery } from './graphql/__generated__/GetClinicServices';
import { GetConsultationsQuery } from './graphql/__generated__/GetConsultations';

export type Consultation = NonNullable<GetConsultationsQuery['getCategories']>[number];

export type Category = CategoryFragment | null;
export type Categories = Array<Category>;
export type Services = NonNullable<
  NonNullable<NonNullable<Category>['subTitles']>[number]
>['services'];
export type Service = NonNullable<Services>[number];
