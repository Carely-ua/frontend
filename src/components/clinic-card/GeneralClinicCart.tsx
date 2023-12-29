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
import { GeneralClinicCartContainer } from './GeneralClinicCartContainer';

interface ClinicCardProps extends Omit<NonNullable<ClinicTypes.Clinic>, 'clinicType'> {
  hrefPrefix: string;
  services?: ClinicTypes.ClinicServices;
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
    <>
      <div className={styles.bottomSection}>
        <div className={styles.bottomSectionItem}>
          <PhoneButton phones={[phone]} />
          <Link className={styles.link} href={`${hrefPrefix}/${id}`}>
            <Button>Детальніше</Button>
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <GeneralClinicCartContainer path={`${hrefPrefix}/${id}`}>
      <div className={styles.card}>
        <div className={styles.mainSection}>
          <div className={styles.image}>
            {!!mainImage && (
              <Image src={mainImage} alt="clinic" layout="fill" objectFit="contain" />
            )}
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
        <div className={styles.extraInfoWrapper}>
          {arr.map((item, index) => {
            return (
              <ClinicExtraInfo
                key={index}
                specialization={item.specialization}
                address={item.add}
                workingTime={item.work}
              />
            );
          })}
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
                return (
                  <div key={id} className={styles.consultationItems}>
                    <ConsultationItems doctors={doctors} serviceId={id} />
                  </div>
                );
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
    </GeneralClinicCartContainer>
  );
};
