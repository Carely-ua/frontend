import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { PageSearch, SearchResult, SearchResultProps } from '@/components';
import { getClinicsWithServices } from '@/services';

interface ServicePageProps extends SearchResultProps {}

const ServicePage: FC<ServicePageProps> = ({ clinics, hrefPrefix }) => {
  const t = useTranslations('clinic');

  return (
    <div>
      <PageSearch title={t('title')} icon="Clinic" />
      {clinics.length > 0 && (
        <SearchResult onlyGeneralCard hrefPrefix={hrefPrefix} clinics={clinics} />
      )}
    </div>
  );
};

interface ServicePageParams {
  params: {
    subcategoryId: string;
  };
}

const ServicePageWrapper = async ({ params }: ServicePageParams) => {
  const { data } = await getClinicsWithServices(params.subcategoryId);

  return <ServicePage clinics={data.getClinics || []} hrefPrefix="/clinics" />;
};

export default ServicePageWrapper;
