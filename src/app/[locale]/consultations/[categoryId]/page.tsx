import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { Search, SearchProps } from '@/components';
import { getClinicsWithServices } from '@/services';

interface ServicePageProps extends SearchProps {}

const ServicePage: FC<ServicePageProps> = ({ clinics, hrefPrefix }) => {
  const t = useTranslations('clinic');

  return (
    <Search
      breadcrumbs={[
        { label: 'Консультації', path: `/consultations` },
        //@ts-ignore
        { label: clinics[0]?.services?.[0]?.name, path: '/' },
      ]}
      onlyGeneralCard
      hrefPrefix={hrefPrefix}
      clinics={clinics}
      title="Консультації у Вінниці"
      icon="Doctor"
    />
  );
};

interface ServicePageParams {
  params: {
    categoryId: string;
  };
}

const ServicePageWrapper = async ({ params }: ServicePageParams) => {
  const { data } = await getClinicsWithServices({ categoryId: params.categoryId });

  //@ts-ignore
  return <ServicePage clinics={data.getClinics || []} hrefPrefix="/clinics" />;
};

export default ServicePageWrapper;
