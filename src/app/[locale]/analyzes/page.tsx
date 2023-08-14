import { ServicePanel } from '@/components';
import { getServices } from '@/services';
import { ServiceType } from '@/utils/graphql/__generated__/types';

const Analyzes = async () => {
  const { data } = await getServices(ServiceType.Analyse);

  const baseUrl = '';

  if (!data.getCategories) return null;

  return (
    <ServicePanel
      baseUrl={baseUrl}
      categories={data.getCategories}
      serviceType={ServiceType.Analyse}
      showPrice={false}
    />
  );
};

export default Analyzes;
