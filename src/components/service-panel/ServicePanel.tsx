import { FC } from 'react';
import { ServiceType } from '@/utils/graphql/__generated__/types';
import { ServicesTypes } from '@/services';
import { SidebarNavigation } from '../sidebar-navigation';
import { ConsultationItems } from '../consultation-items';
import styles from './ServicePanel.module.scss';
import { Subcategory, SubcategoryProps } from './Subcategory';

const titles = {
  [ServiceType.Analyse]: 'Аналізи',
  [ServiceType.Consultations]: 'Консультації',
  [ServiceType.Diagnostic]: 'Діагностика',
};

const getCurrentCategory = (categories: ServicesTypes.ClinicServiceData, categoryId: string) => {
  return categories?.find(item => {
    if (!item) return;

    return item.id === categoryId;
  });
};

interface ServicePanelProps extends Pick<SubcategoryProps, 'showPrice'> {
  serviceType: ServiceType;
  categoryId?: string;
  baseUrl: string;
  categories: ServicesTypes.Categories;
}

export const ServicePanel: FC<ServicePanelProps> = async ({
  serviceType,
  categoryId,
  categories,
  baseUrl,
  showPrice,
}) => {
  const defaultCategoryId = categories?.[0]?.id || '';
  const _categoryId = categoryId || defaultCategoryId;

  const currentCategory = getCurrentCategory(categories, _categoryId);
  const service = currentCategory?.services?.[0];

  return (
    <div className={styles.servicePanel}>
      <SidebarNavigation
        title={titles[serviceType]}
        baseUrl={baseUrl}
        categoryId={_categoryId}
        categories={categories || []}
      />
      <div className={styles.servicesSections}>
        {serviceType === ServiceType.Consultations ? (
          <div className={styles.consultationItems}>
            <ConsultationItems serviceId={service?.id || ''} doctors={service?.doctors} />
          </div>
        ) : (
          currentCategory?.subTitles?.map(item => {
            return item ? <Subcategory key={item.id} showPrice={showPrice} {...item} /> : null;
          })
        )}
      </div>
    </div>
  );
};
