import { GetServicesQuery } from './graphql/__generated__/GetClinicServices';
import { GetConsultationsQuery } from './graphql/__generated__/GetConsultations';

export type Consultation = NonNullable<GetConsultationsQuery['getCategories']>[number];
export type ClinicService = NonNullable<
  NonNullable<
    NonNullable<NonNullable<GetServicesQuery['getServices']>[number]>['subTitles']
  >[number]
>['services'];
