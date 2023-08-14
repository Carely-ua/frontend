import { ServicePanel } from '@/components';
import { getServices } from '@/services';
import { ServiceType } from '@/utils/graphql/__generated__/types';

interface AnalyzesParams {
  params: {
    category?: [id: string];
  };
}

const Analyzes = async ({ params }: AnalyzesParams) => {
  const categoryId = params.category?.[0];
  const { data } = await getServices(ServiceType.Analyse);

  if (!data.getCategories) return null;

  return (
    <ServicePanel
      baseUrl="/analyzes"
      categories={data.getCategories}
      serviceType={ServiceType.Analyse}
      showPrice={false}
      categoryId={categoryId}
    />
  );
};

export default Analyzes;
