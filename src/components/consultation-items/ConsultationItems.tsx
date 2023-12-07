import { FC, ReactNode, SyntheticEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ServicesTypes } from '@/services';
import { Typography } from '@/ui-kit';
import { Rating } from '../rating';
import { SVG } from '../svg';
import { PriceBlock } from '../price-block';
import { AddToBagButton } from '../add-to-bag-button';
import styles from './ConsultationItems.module.scss';
import { ConsultationItemContainer } from './ConsultationItemContainer';

interface ConsultationItemProps extends ServicesTypes.Doctor {
  serviceId: string;
  children?: ReactNode;
  profActivity?: string | null;
  conferences?: string | null;
  associations?: string | null;
  scientificWorks?: string | null;
}

type DoctorInfoItem = {
  title: string | null | undefined;
  description: string | null | undefined;
  id: number;
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
}) => {
  const arr: DoctorInfoItem[] = [
    { title: 'Професійна діяльність', description: profActivity, id: Math.random() },
    { title: 'Стажування, конференції, семінари', description: conferences, id: Math.random() },
    { title: 'Членство в асоціаціях', description: associations, id: Math.random() },
    { title: 'Наукові роботи та патенти', description: scientificWorks, id: Math.random() },
  ];
  return (
    <ConsultationItemContainer>
      <div className={styles.docInfoWrapper}>
        <div className={styles.consultationItem}>
          <Link href={`/doctor/${id}/${serviceId}`} className={styles.doctorImage}>
            <Image src={image} layout="fill" objectFit="cover" alt="doctor" />
          </Link>
          <div className={styles.mainInfo}>
            <div className={styles.mobileRating}>
              <Rating />
            </div>
            <Link href={`/doctor/${id}/${serviceId}`} className={styles.doctorName}>
              <Typography component="h3" gutterBottom="md">
                {name}
              </Typography>
            </Link>
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
              <p>{scientificWorks}</p>
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
      </div>
      {children}
      {arr.some(item => item.description) && (
        <ul className={styles.docInfoList}>
          {arr.map(({ title, description, id }) => {
            return description ? (
              <li key={id}>
                <Typography component={'h3'}>{title}</Typography>
                <Typography component={'p'}>{description}</Typography>
              </li>
            ) : null;
          })}
        </ul>
      )}
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
