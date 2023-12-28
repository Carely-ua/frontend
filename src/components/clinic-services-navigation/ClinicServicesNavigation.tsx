import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Typography } from '@/ui-kit';
import { ServiceType } from '@/utils/graphql/__generated__/types';
import styles from './ClinicServicesNavigation.module.scss';

interface ClinicServicesNavigationProps {
  clinicId: string;
  serviceType: any;
  hideAnalyse: boolean;
}

const NavigationItems = [
  {
    title: 'Аналізи',
    id: ServiceType.Analyse,
  },
  {
    title: 'Консультації',
    id: ServiceType.Consultations,
  },
  {
    title: 'Діагностика',
    id: ServiceType.Diagnostic,
  },
];

export const ClinicServicesNavigation: FC<ClinicServicesNavigationProps> = ({
  clinicId,
  serviceType,
  hideAnalyse,
}) => {
  return (
    <div className={styles.items}>
      {NavigationItems.map(({ title, id }) => {
        if (hideAnalyse && id === ServiceType.Analyse) return null;

        const isActive = serviceType === id;

        return (
          <Link
            key={id}
            className={classNames(styles.item, {
              [styles.itemActive]: isActive,
            })}
            href={`/clinics/${clinicId}/${id}`}>
            <Typography component="h4" color={isActive ? 'white' : 'dark-grey'}>
              {title}
            </Typography>
          </Link>
        );
      })}
    </div>
  );
};
