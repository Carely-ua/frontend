import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { PageSearch, ServicePanel } from '@/components';
import { getServices, ServicesTypes } from '@/services';
import { ServiceType } from '@/utils/graphql/__generated__/types';

interface AnalyzesProps {
  categories: ServicesTypes.Categories;
  categoryId?: string;
}

const Analyzes: FC<AnalyzesProps> = ({ categories, categoryId }) => {
  const t = useTranslations('laboratory');

  return (
    <>
      <PageSearch title={t('title')} icon="Clinic" />
      <ServicePanel
        baseUrl="/analyzes"
        categories={categories}
        serviceType={ServiceType.Analyse}
        showPrice={false}
        categoryId={categoryId}
      />
    </>
  );
};

interface AnalyzesWrapperParams {
  params: {
    category?: [id: string];
  };
}

const AnalyzesWrapper = async ({ params }: AnalyzesWrapperParams) => {
  const categoryId = params.category?.[0];
  const { data } = await getServices(ServiceType.Analyse);

  if (!data.getCategories) return null;

  return <Analyzes categoryId={categoryId} categories={data.getCategories} />;
};

export default AnalyzesWrapper;
