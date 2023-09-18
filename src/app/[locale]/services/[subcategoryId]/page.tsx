import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { Search, SearchProps } from '@/components';
import { getClinicsWithServices } from '@/services';

interface ServicePageProps extends SearchProps {}

const ServicePage: FC<ServicePageProps> = ({ clinics, hrefPrefix }) => {
  const t = useTranslations('clinic');

  return (
    <Search
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
