import { ServicePanel } from '@/components';
import { getServices } from '@/services';
import { ServiceType } from '@/utils/graphql/__generated__/types';

const Diagnostics = async () => {
  const { data } = await getServices(ServiceType.Diagnostic);

  const baseUrl = '';

  if (!data.getCategories) return null;

  return (
    <ServicePanel
      baseUrl={baseUrl}
      categories={data.getCategories}
      serviceType={ServiceType.Diagnostic}
      showPrice={false}
    />
  );
};

export default Diagnostics;
