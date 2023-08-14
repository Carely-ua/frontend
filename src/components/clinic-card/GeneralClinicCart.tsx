import { FC, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ClinicTypes } from '@/services';
import { Button, Typography } from '@/ui-kit';
import { ClinicType } from '@/utils/graphql/__generated__/types';
import { Rating } from '../rating';
import { ClinicExtraInfo } from '../clinic-extra-info';
import styles from './ClinicCard.module.scss';

const defaultImage = '/images/test-clinic-image.png';
const defaultWorkingHours = 'з 9:00-17:00';

interface ClinicCardProps extends NonNullable<ClinicTypes.Clinic> {
  hrefPrefix: string;
  children?: ReactNode;
}

export const GeneralClinicCart: FC<ClinicCardProps> = ({
  hrefPrefix,
  id,
  name,
  address,
  rating,
  image,
  reviewsCount,
  workingTime = defaultWorkingHours,
  specializations,
  children,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.mainSection}>
        <div className={styles.image}>
          <Image src={defaultImage} alt="clinic" width="160" height="160" />
        </div>
        <div className={styles.generalCartContent}>
          <div className={styles.header}>
            <Typography component="h3">{name}</Typography>
            <Rating rating={rating || 0} reviewsCount={reviewsCount} />
          </div>
          <div className={styles.bottomSection}>
            <ClinicExtraInfo address={address} workingTime={workingTime} />
            <div>
              <Link className={styles.link} href={`/${hrefPrefix}/${id}`}>
                <Button>Детальніше</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
