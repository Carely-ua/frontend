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
import { PhoneButton } from '../phone-button';
import styles from './ClinicCard.module.scss';

interface ClinicCardProps extends Omit<NonNullable<ClinicTypes.Clinic>, 'clinicType'> {
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
  workingTime,
  services,
  phone,
}) => {
  const BottomSection = () => (
    <div className={styles.bottomSection}>
      <ClinicExtraInfo address={address} workingTime={workingTime} />
      <div className={styles.bottomSectionItem}>
        <PhoneButton phones={[phone]} />
        <Link className={styles.link} href={`${hrefPrefix}/${id}`}>
          <Button>Детальніше</Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className={styles.card}>
      <div className={styles.mainSection}>
        <div className={styles.image}>
          {!!mainImage && <Image src={mainImage} alt="clinic" layout="fill" objectFit="contain" />}
        </div>
        <div className={styles.generalCartContent}>
          <div className={styles.header}>
            <Typography component="h3">{name}</Typography>
            <Rating rating={rating || 0} reviewsCount={reviewsCount} />
          </div>
          <div className={styles.desktopBottomSection}>
            <BottomSection />
          </div>
        </div>
      </div>
      <div className={styles.mobileBottomSection}>
        <BottomSection />
      </div>
      {services && (
        <div className={styles.services}>
          {services.map(service => {
            if (!service) return null;

            const { name, id, price, discountPrice, serviceType, doctors } = service;

            if (serviceType === ServiceType.Consultations) {
              return <ConsultationItems key={id} doctors={doctors} serviceId={id} />;
            }

            return (
              <div key={id} className={styles.service}>
                <Typography component="p">{name}</Typography>
                <div className={styles.buyInfo}>
                  <div className={styles.price}>
                    <PriceBlock firstPrice={price} secondPrice={discountPrice} />
                  </div>
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
