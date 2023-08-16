import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { PageSearch, ServicePanel } from '@/components';
import { getServices, ServicesTypes } from '@/services';
import { ServiceType } from '@/utils/graphql/__generated__/types';

interface DiagnosticsProps {
  categories: ServicesTypes.Categories;
  categoryId?: string;
}

const Diagnostics: FC<DiagnosticsProps> = ({ categories, categoryId }) => {
  const t = useTranslations('Diagnostics');

  return (
    <>
      <PageSearch title={t('title')} icon="Diagnostic" />
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

interface DiagnosticsWrapperParams {
  params: {
    category?: [id: string];
  };
}

const DiagnosticsWrapper = async ({ params }: DiagnosticsWrapperParams) => {
  const categoryId = params.category?.[0];
  const { data } = await getServices(ServiceType.Diagnostic);

  if (!data.getCategories) return null;

  return <Diagnostics categoryId={categoryId} categories={data.getCategories} />;
};

export default DiagnosticsWrapper;
