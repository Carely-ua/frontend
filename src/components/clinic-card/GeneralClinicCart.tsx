import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ClinicTypes } from '@/services';
import { Button, Typography } from '@/ui-kit';
import { ServiceType } from '@/utils/graphql/__generated__/types';
import { Rating } from '../rating';
import { ClinicExtraInfo } from '../clinic-extra-info';
import { ConsultationItems } from '../consultation-items';
import { PriceBlock } from '../price-block';
import { AddToBagButton } from '../add-to-bag-button';
import styles from './ClinicCard.module.scss';

const defaultImage = '/images/test-clinic-image.png';
const defaultWorkingHours = 'з 9:00-17:00';

interface ClinicCardProps extends NonNullable<ClinicTypes.Clinic> {
  hrefPrefix: string;
  services?: ClinicTypes.ClinicServices;
}

export const GeneralClinicCart: FC<ClinicCardProps> = ({
  hrefPrefix,
  id,
  name,
  address,
  rating,
  mainImage,
  reviewsCount,
  workingTime = defaultWorkingHours,
  services,
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
      {services && (
        <div className={styles.services}>
          {services.map(service => {
            if (!service) return null;

            const { name, id, price, discountPrice, serviceType, doctors } = service;

            if (serviceType === ServiceType.Consultations) {
              return <ConsultationItems key={id} doctors={doctors} />;
            }

            return (
              <div key={id} className={styles.service}>
                <Typography component="p">{name}</Typography>
                <div className={styles.buyInfo}>
                  <PriceBlock firstPrice={price} secondPrice={discountPrice} />
                  <AddToBagButton buttonType="secondary" serviceId={id} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
