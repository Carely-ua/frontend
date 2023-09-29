import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { Search, SearchProps } from '@/components';
import { getClinicsWithServices } from '@/services';
import { ServiceType } from '@/utils/graphql/__generated__/types';

const titles = {
  [ServiceType.Analyse]: 'Аналізи',
  [ServiceType.Diagnostic]: 'Діагностика',
};

const path = {
  [ServiceType.Analyse]: 'analyzes',
  [ServiceType.Diagnostic]: 'diagnostics',
};

interface ServicePageProps extends SearchProps {}

const ServicePage: FC<ServicePageProps> = ({ clinics, hrefPrefix }) => {
  const t = useTranslations('clinic');

  //@ts-ignore
  const serviceType = clinics[0]?.services?.[0]?.serviceType;

  return (
    <Search
      breadcrumbs={[
        //@ts-ignore
        { label: titles[serviceType], path: `/${path[serviceType]}` },
        //@ts-ignore
        { label: clinics[0]?.services?.[0].category.title, path: '/' },
      ]}
      onlyGeneralCard
      hrefPrefix={hrefPrefix}
      clinics={clinics}
      title={t('title')}
      icon="Clinic"
    />
  );
};

interface ServicePageParams {
  params: {
    subcategoryId: string;
  };
}

const ServicePageWrapper = async ({ params }: ServicePageParams) => {
  const { data } = await getClinicsWithServices({ categorySubTitleId: params.subcategoryId });

  //@ts-ignore
  return <ServicePage clinics={data.getClinics || []} hrefPrefix="/clinics" />;
};

export default ServicePageWrapper;
