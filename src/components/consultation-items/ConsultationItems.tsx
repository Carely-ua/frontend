import { FC } from 'react';
import Image from 'next/image';
import { ServicesTypes } from '@/services';
import { Typography } from '@/ui-kit';
import { Rating } from '../rating';
import { SVG } from '../svg';
import { PriceBlock } from '../price-block';
import { AddToBagButton } from '../add-to-bag-button';
import styles from './ConsultationItems.module.scss';

interface ConsultationItemProps extends ServicesTypes.Doctor {
  serviceId: string;
}

const ConsultationItem: FC<ConsultationItemProps> = ({
  name,
  price,
  discountPrice,
  experience,
  id,
  serviceId,
  image,
  tags,
  title,
}) => {
  return (
    <div className={styles.consultationItem}>
      <div className={styles.doctorImage}>
        <Image src={image} layout="fill" objectFit="cover" alt="doctor" />
      </div>
      <div className={styles.mainInfo}>
        <div className={styles.mobileRating}>
          <Rating />
        </div>
        <Typography component="h3" gutterBottom="md">
          {name}
        </Typography>
        {!!tags && (
          <Typography component="h4" gutterBottom="md">
            {tags.join(', ')}
          </Typography>
        )}
        {!!title && (
          <div className={styles.extraInfoItem}>
            <div className={styles.extraInfoItemIcon}>
              <SVG.DoctorMan />
            </div>
            <Typography component="p" color="dark-grey">
              {title}
            </Typography>
          </div>
        )}
        <div className={styles.extraInfoItem}>
          <div className={styles.extraInfoItemIcon}>
            <SVG.Portfolio />
          </div>
          <Typography component="p" color="dark-grey">
            {experience} років досвіду
          </Typography>
        </div>
      </div>
      <div className={styles.priceInfo}>
        <div className={styles.rating}>
          <Rating />
        </div>
        <div className={styles.price}>
          <PriceBlock firstPrice={price} secondPrice={discountPrice} />
        </div>
        <AddToBagButton serviceId={serviceId} doctorId={id} />
      </div>
    </div>
  );
};

interface ConsultationItemsProps {
  doctors: ServicesTypes.Doctors;
  serviceId: string;
}

export const ConsultationItems: FC<ConsultationItemsProps> = ({ doctors, serviceId }) => {
  return doctors?.map(doctor =>
    doctor ? <ConsultationItem key={doctor.id} {...doctor} serviceId={serviceId} /> : null,
  );
};