import { FC } from 'react';
import Link from 'next/link';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@/ui-kit';
import { ServicesTypes, getConsultations } from '@/services';
import { SVG } from '../svg';
import styles from './ConsultationNavigation.module.scss';

const ConsultationItem: FC<NonNullable<ServicesTypes.Consultation>> = ({ title, id }) => {
  return (
    <Grid xs={4}>
      <Link className={styles.consultationItem} href={`/${id}`}>
        <Typography component="p">{title}</Typography>
        <div className={styles.icon}>
          <SVG.Arrow width={8} height={13} />
        </div>
      </Link>
    </Grid>
  );
};

export const ConsultationNavigation = async () => {
  const { data } = await getConsultations();

  if (!data.getCategories || data.getCategories.length === 0) return null;

  return (
    <Grid container spacing={2}>
      {data.getCategories.map(consultation => {
        if (!consultation) return null;

        return <ConsultationItem key={consultation.id} {...consultation} />;
      })}
    </Grid>
  );
};
