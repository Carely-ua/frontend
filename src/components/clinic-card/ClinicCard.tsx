import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
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

const arr = [
  {
    specialization: 'Specialization',
    add: '21009, м. Вінниця, вул. Замостянська, 13',
    work: 'пн-пт 09.00 – 19.00 сб 09.00 – 17.00 нд 09.00 – 15.00',
  },
  {
    specialization: 'Specialization',
    add: '21009, м. Вінниця, вул. Замостянська, 13',
    work: 'пн-пт 09.00 – 19.00 сб 09.00 – 17.00 нд 09.00 – 15.00',
  },
  {
    specialization: 'Specialization',
    add: '21009, м. Вінниця, вул. Замостянська, 13',
    work: 'пн-пт 09.00 – 19.00 сб 09.00 – 17.00 нд 09.00 – 15.00',
  },
];

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
  const router = useRouter();
  const specializationsArray = specializations?.map(item => item?.title);

  const pressHandler = () => {
    router.push(`/${hrefPrefix}/${id}`);
  };

  return (
    <div className={styles.card} onClick={pressHandler}>
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
          <div className={styles.buttonWrapper}>
            <Typography
              component="p"
              color="dark-grey"
              gutterBottom="md"
              className={styles.specializations}>
              {specializationsArray?.join(', ')}
            </Typography>
          </div>
          <div className={styles.bottomSectionItem}>
            <PhoneButton phones={[phone]} />
            <Link className={styles.link} href={`/${hrefPrefix}/${id}`}>
              <Button>Детальніше</Button>
            </Link>
          </div>
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
        {arr.map((item, index) => {
          return (
            <>
              <ClinicExtraInfo
                key={index}
                specialization={item.specialization}
                address={item.add}
                workingTime={item.work}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};
