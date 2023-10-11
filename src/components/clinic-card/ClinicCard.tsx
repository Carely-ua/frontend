import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { ClinicTypes } from '@/services';
import { Button, Typography } from '@/ui-kit';
import { Rating } from '../rating';
import { ClinicExtraInfo } from '../clinic-extra-info';
import { PhoneButton } from '../phone-button';
import styles from './ClinicCard.module.scss';

const defaultWorkingHours = 'з 9:00-17:00';

interface ClinicCardProps extends NonNullable<ClinicTypes.Clinic> {
  hrefPrefix: string;
}

export const ClinicCard: FC<ClinicCardProps> = ({
  hrefPrefix,
  id,
  name,
  address,
  rating,
  mainImage,
  reviewsCount,
  workingTime = defaultWorkingHours,
  specializations,
  phone,
}) => {
  const specializationsArray = specializations?.map(item => item?.title);

  return (
    <div className={styles.card}>
      <div className={classNames(styles.mainSection, styles.mainSectionWithBorder)}>
        <div className={styles.image}>
          {!!mainImage && <Image src={mainImage} alt="clinic" layout="fill" objectFit="contain" />}
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <Typography component="h3">{name}</Typography>
            <Rating rating={rating || 0} reviewsCount={reviewsCount} />
          </div>
          <Typography component="p" gutterBottom="md" className={styles.label}>
            Медичний центр
          </Typography>
          <Typography
            component="p"
            color="dark-grey"
            gutterBottom="md"
            className={styles.specializations}>
            {specializationsArray?.join(', ')}
          </Typography>
        </div>
      </div>
      <Typography
        component="p"
        color="dark-grey"
        gutterBottom="md"
        className={styles.specializationsMobile}>
        {specializationsArray?.join(', ')}
      </Typography>
      <div className={styles.bottomSection}>
        <ClinicExtraInfo address={address} workingTime={workingTime} />
        <div className={styles.bottomSectionItem}>
          <PhoneButton phones={[phone]} />
          <Link className={styles.link} href={`/${hrefPrefix}/${id}`}>
            <Button>Детальніше</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
