import { GetConsultationsQuery } from './graphql/__generated__/GetConsultations';

export type Consultation = NonNullable<GetConsultationsQuery['getCategories']>[number];
