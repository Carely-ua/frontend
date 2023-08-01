import { FC } from 'react';
import { Typography } from '@/ui-kit';
import { ServiceType } from '@/utils/graphql/__generated__/types';
import { SidebarNavigation } from '../sidebar-navigation';
import { PriceBlock } from '../price-block';
import styles from './ServicePanel.module.scss';

//TODO: replace it to data from backend
const DATA = [
  {
    title: 'Тиреоїдна панель',
    items: [
      {
        name: 'Йод (сеча)',
        firstPrice: 120,
        secondPrice: 100,
      },
      {
        name: 'Кальцитонін',
        firstPrice: 120,
        secondPrice: 100,
      },
      {
        name: 'Пероксидаза щитоподібної залози, антитіла (ATПO)',
        firstPrice: 120,
        secondPrice: 100,
      },
    ],
  },
  {
    title: 'Панель фосфорно-кальцієвого обміну',
    items: [
      {
        name: 'Кальцитонін',
        firstPrice: 120,
        secondPrice: 100,
      },
      {
        name: 'Пероксидаза щитоподібної залози, антитіла (ATПO)',
        firstPrice: 120,
        secondPrice: 100,
      },
    ],
  },
];

const ServiceSection = ({ title, items }) => {
  return (
    <div>
      <Typography component="h2" color="primary" gutterBottom="xlg">
        {title}
      </Typography>
      {items.map(({ name, firstPrice, secondPrice }) => (
        <div key={name} className={styles.serviceItem}>
          <Typography component="h4">{name}</Typography>
          <PriceBlock secondPrice={secondPrice} firstPrice={firstPrice} />
        </div>
      ))}
    </div>
  );
};

//TODO: replace it to backend data
const navigationSections = [
  { name: 'Гормональна панель', id: '1' },
  { name: 'Панель пренатальної діагностики', id: '2' },
  { name: 'Панель каріотипування', id: '3' },
  { name: 'Онкологічна панель', id: '4' },
  { name: 'Інфекційна панель', id: '5' },
  { name: 'Панель імунологіїи', id: '6' },
  { name: 'Панель бактеріологічних досліджень', id: '7' },
  { name: 'Панель цитологічних досліджень', id: '8' },
  { name: 'Панель патогістологічних досліджень', id: '9' },
];

interface ServicePanelProps {
  serviceType: ServiceType;
  clinicId: string;
  categoryId: string;
}

const titles = {
  [ServiceType.Analyse]: 'Аналізи',
  [ServiceType.Consultations]: 'Консультації',
  [ServiceType.Diagnostic]: 'Діагностика',
};

export const ServicePanel: FC<ServicePanelProps> = ({ serviceType, clinicId, categoryId }) => {
  const baseUrl = `/clinics/${clinicId}/${serviceType}`;

  return (
    <div className={styles.servicePanel}>
      <SidebarNavigation
        title={titles[serviceType]}
        baseUrl={baseUrl}
        categoryId={categoryId}
        sections={navigationSections}
      />
      <div className={styles.servicesSections}>
        {DATA.map(item => (
          <ServiceSection key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};
