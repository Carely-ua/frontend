import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ClinicTypes } from '@/services';
import { Button, Typography } from '@/ui-kit';
import { Rating } from '../rating';
import { ClinicExtraInfo } from '../clinic-extra-info';
import styles from './ClinicCard.module.scss';

const defaultImage = '/images/test-clinic-image.png';
const defaultWorkingHours = 'з 9:00-17:00';
const defaultSpecializations = [
  'Кардіолог',
  'ортопед',
  'УЗД щитовидка',
  'УЗД серця',
  'УЗД січовивідної системи',
  'УЗД молочна залоза',
];

interface ClinicCardProps extends NonNullable<ClinicTypes.Clinic> {
  hrefPrefix: string;
}

export const ClinicCard: FC<ClinicCardProps> = ({
  hrefPrefix,
  id,
  name,
  address,
  rating,
  image,
  //TODO add workingHours and specializations to backend
  //@ts-ignore
  workingHours = defaultWorkingHours,
  //@ts-ignore
  specializations = defaultSpecializations,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.mainSection}>
        <div className={styles.image}>
          <Image src={defaultImage} alt="clinic" width="160" height="160" />
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <Typography component="h3">{name}</Typography>
            <Rating rating={rating || 0} reviewAmount={92} />
          </div>
          <Typography component="p" color="dark-grey" gutterBottom="md">
            {specializations.join(', ')}
          </Typography>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <ClinicExtraInfo address={address} workingHours={workingHours} />
        <div>
          <Link className={styles.link} href={`/${hrefPrefix}/${id}`}>
            <Button>Детальніше</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
