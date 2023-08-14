import { ServicePanel } from '@/components';
import { getServices } from '@/services';
import { ServiceType } from '@/utils/graphql/__generated__/types';

const Analyzes = async () => {
  const { data } = await getServices(ServiceType.Analyse);

  const baseUrl = '';

  return (
    <ServicePanel
      baseUrl={baseUrl}
      categoriesData={data.getCategories}
      serviceType={ServiceType.Analyse}
    />
  );
};

export default Analyzes;
