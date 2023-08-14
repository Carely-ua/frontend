import { FC } from 'react';
import { Button, Typography } from '@/ui-kit';
import { ServiceType } from '@/utils/graphql/__generated__/types';
import { ServicesTypes, getClinicServices } from '@/services';
import { SidebarNavigation } from '../sidebar-navigation';
import { PriceBlock } from '../price-block';
import { AddToBagButton } from '../add-to-bag-button';
import styles from './ServicePanel.module.scss';

interface ServiceSectionProps {
  title: string;
  services?: ServicesTypes.ClinicService;
}

const ServiceSection: FC<ServiceSectionProps> = ({ title, services }) => {
  if (!services) return null;

  return (
    <div>
      <Typography component="h2" color="primary" gutterBottom="xlg">
        {title}
      </Typography>
      {services.map(service => {
        if (!service) return null;

        const { id, name, price } = service;

        return (
          <div key={id} className={styles.serviceItem}>
            <Typography component="h4">{name}</Typography>
            <div className={styles.buyInfo}>
              <PriceBlock secondPrice={price} firstPrice={120} />
              <div className={styles.addToCartButton}>
                <AddToBagButton serviceId={id} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

interface ServicePanelProps {
  serviceType: ServiceType;
  categoryId?: string;
  baseUrl: string;
  categoriesData: any;
}

const titles = {
  [ServiceType.Analyse]: 'Аналізи',
  [ServiceType.Consultations]: 'Консультації',
  [ServiceType.Diagnostic]: 'Діагностика',
};

export const ServicePanel: FC<ServicePanelProps> = async ({
  serviceType,
  categoryId,
  categoriesData,
  baseUrl,
}) => {
  const categories = categoriesData.map(item => {
    if (!item) return null;

    return { id: item.id, title: item.title };
  });

  const defaultCategoryId = categories?.[0]?.id || '';
  const _categoryId = categoryId || defaultCategoryId;

  const currentCategory = categoriesData?.find(item => {
    if (!item) return;

    return item.id === _categoryId;
  });

  return (
    <div className={styles.servicePanel}>
      <SidebarNavigation
        title={titles[serviceType]}
        baseUrl={baseUrl}
        categoryId={_categoryId}
        categories={categories || []}
      />
      <div className={styles.servicesSections}>
        {currentCategory?.subTitles?.map(item => {
          if (!item) return null;

          const { id } = item;

          return <ServiceSection key={id} {...item} />;
        })}
      </div>
    </div>
  );
};
