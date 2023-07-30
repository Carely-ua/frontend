import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ClinicTypes } from '@/services';
import { Typography } from '@/ui-kit';
import { Rating } from '../rating';
import { ClinicExtraInfo } from '../clinic-extra-info';
import styles from './ClinicCard.module.scss';

export const ClinicCard: FC<NonNullable<ClinicTypes.Clinic>> = ({ id }) => {
  return (
    <div className={styles.card}>
      <div className={styles.mainSection}>
        <div className={styles.image}>
          <Image src="/images/test-clinic-image.png" alt="clinic" width="160" height="160" />
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <Typography component="h3">Медичний центр «MED OK»</Typography>
            <Rating rating={5} reviewAmount={92} />
          </div>
          <Typography component="p" color="dark-grey" gutterBottom="md">
            Кардіолог, ортопед , УЗД щитовидка, УЗД серця, УЗД січовивідної системи, УЗД молочна
            залоза
          </Typography>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <ClinicExtraInfo
          address="вул. Ващука, 20 б, оф. 5, район Вишенька"
          workingHours="з 9:00-17:00"
        />
        <div>
          <Link href={`/clinics/${id}`}>Детальніше</Link>
        </div>
      </div>
    </div>
  );
};
