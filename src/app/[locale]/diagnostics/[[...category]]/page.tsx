import { ServicePanel } from '@/components';
import { getServices } from '@/services';
import { ServiceType } from '@/utils/graphql/__generated__/types';

interface DiagnosticsParams {
  params: {
    category?: [id: string];
  };
}

const Diagnostics = async ({ params }: DiagnosticsParams) => {
  const categoryId = params.category?.[0];
  const { data } = await getServices(ServiceType.Diagnostic);

  if (!data.getCategories) return null;

  return (
    <ServicePanel
      baseUrl="/diagnostics"
      categories={data.getCategories}
      serviceType={ServiceType.Diagnostic}
      showPrice={false}
    />
  );
};

export default Diagnostics;
