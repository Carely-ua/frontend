import { FC, ReactNode, SyntheticEvent } from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ServicesTypes } from '@/services';
import { Typography } from '@/ui-kit';
import { Rating } from '../rating';
import { SVG } from '../svg';
import { PriceBlock } from '../price-block';
import { AddToBagButton } from '../add-to-bag-button';
import styles from './ConsultationItems.module.scss';
import { ConsultationItemContainer } from './ConsultationItemContainer';
const Link = dynamic(() => import('next/link'), { ssr: false });

interface ConsultationItemProps extends ServicesTypes.Doctor {
  serviceId: string;
  children?: ReactNode;
  profActivity?: string | null;
  conferences?: string | null;
  associations?: string | null;
  scientificWorks?: string | null;
}

type DoctorInfoItem = {
  title?: string | null;
  description?: string | null;
};

export const ConsultationItem: FC<ConsultationItemProps> = ({
  name,
  price,
  discountPrice,
  experience,
  id,
  serviceId,
  image,
  tags,
  title,
  children,
  profActivity,
  conferences,
  associations,
  scientificWorks,
  rating,
  reviewsCount,
}) => {
  const arr: DoctorInfoItem[] = [
    { title: 'Професійна діяльність', description: profActivity },
    { title: 'Стажування, конференції, семінари', description: conferences },
    { title: 'Членство в асоціаціях', description: associations },
    { title: 'Наукові роботи та патенти', description: scientificWorks },
  ];

  return (
    <ConsultationItemContainer>
      <Link suppressHydrationWarning href={`/doctor/${id}/${serviceId}`} className={styles.link}>
        <div className={styles.consultationItem}>
          <div className={styles.doctorImage}>
            <Image src={image} layout="fill" objectFit="cover" alt="doctor" />
          </div>
          <div className={styles.mainInfo}>
            <div className={styles.mobileRating}>
              <Rating />
            </div>
            <div className={styles.doctorName}>
              <Typography component="h3" gutterBottom="md">
                {name}
              </Typography>
            </div>
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
              <Rating rating={rating} reviewsCount={reviewsCount} />
            </div>
            <div className={styles.price}>
              <PriceBlock firstPrice={price} secondPrice={discountPrice} />
            </div>
            <AddToBagButton serviceId={serviceId} doctorId={id} />
          </div>
        </div>
        {children}
        {arr.some(item => item.description) && (
          <ul className={styles.docInfoList}>
            {arr.map(({ title, description }, index) => {
              return (
                !!description && (
                  <li key={index}>
                    <Typography component="h3">{title}</Typography>
                    <Typography component="p">{description}</Typography>
                  </li>
                )
              );
            })}
          </ul>
        )}
      </Link>
    </ConsultationItemContainer>
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
