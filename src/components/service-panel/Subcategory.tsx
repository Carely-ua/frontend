import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Typography } from '@/ui-kit';
import { ServicesTypes } from '@/services';
import { ServiceType } from '@/utils/graphql/__generated__/types';
import { PriceBlock } from '../price-block';
import { AddToBagButton } from '../add-to-bag-button';
import { Rating } from '../rating';
import { SVG } from '../svg';
import styles from './ServicePanel.module.scss';

export interface SubcategoryProps {
  id: string;
  title: string;
  services?: ServicesTypes.Services;
  showPrice?: boolean;
}

const ServiceItem: FC<any> = ({ id, name, showPrice, price, subcategoryId }) => {
  return (
    <div key={id} className={styles.serviceItem}>
      <Typography component="h3" weight="medium">
        {name}
      </Typography>
      {showPrice ? (
        <div className={styles.buyInfo}>
          <PriceBlock secondPrice={price} firstPrice={120} />
          <div className={styles.addToCartButton}>
            <AddToBagButton serviceId={id} />
          </div>
        </div>
      ) : (
        <Link href={`/services/${subcategoryId}`}>
          <Button>Обрати</Button>
        </Link>
      )}
    </div>
  );
};

const ConsultationItem: FC<ServicesTypes.Doctor> = ({ name, price, discountPrice, experience }) => {
  return (
    <div className={styles.consultationItem}>
      <Image
        className={styles.doctorImage}
        src="/images/doctor.jpeg"
        width={160}
        height={160}
        alt="doctor"
      />
      <div className={styles.mainInfo}>
        <Typography component="h3" gutterBottom="md">
          {name}
        </Typography>
        <Typography component="h4" gutterBottom="md">
          Гастроентеролог, Дієтолог, Терапевт
        </Typography>
        <div className={styles.extraInfoItem}>
          <div className={styles.extraInfoItemIcon}>
            <SVG.DoctorMan />
          </div>
          <Typography component="p" color="dark-grey">
            Лікар вищої категорії
          </Typography>
        </div>
        <div className={styles.extraInfoItem}>
          <div className={styles.extraInfoItemIcon}>
            <SVG.Portfolio />
          </div>
          <Typography component="p" color="dark-grey">
            {experience} років досвіду
          </Typography>
        </div>
      </div>
      <div>
        <div className={styles.rating}>
          <Rating />
        </div>
        <div className={styles.price}>
          <PriceBlock firstPrice={price} secondPrice={discountPrice} />
        </div>
        <AddToBagButton serviceId={''} />
      </div>
    </div>
  );
};

interface ConsultationItemsProps {
  doctors: ServicesTypes.Doctors;
}

const ConsultationItems: FC<ConsultationItemsProps> = ({ doctors }) => {
  return doctors?.map(doctor => (doctor ? <ConsultationItem key={doctor.id} {...doctor} /> : null));
};

export const Subcategory: FC<SubcategoryProps> = ({
  id: subcategoryId,
  title,
  services,
  showPrice = true,
}) => {
  if (!services) return null;

  return (
    <div>
      <Typography component="h2" color="primary" gutterBottom="xlg">
        {title}
      </Typography>
      {services.map(service => {
        if (!service) return null;

        const { id, name, price, serviceType, doctors } = service;

        if (serviceType === ServiceType.Consultations) {
          return <ConsultationItems key={id} doctors={doctors} />;
        }

        return (
          <ServiceItem
            key={id}
            id={id}
            name={name}
            showPrice={showPrice}
            price={price}
            subcategoryId={subcategoryId}
          />
        );
      })}
    </div>
  );
};
