import { FC } from 'react';
import Link from 'next/link';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@/ui-kit';
import { SVG } from '../svg';
import styles from './ConsultationNavigation.module.scss';

const mockItems = [
  {
    title: 'Гастроентеролог',
    id: '1',
  },
  {
    title: 'Гінеколог',
    id: '2',
  },
  {
    title: 'Дерматолог',
    id: '3',
  },
  {
    title: 'Невролог',
    id: '4',
  },
  {
    title: 'Отоларинголог',
    id: '5',
  },
  {
    title: 'Педіатр',
    id: '6',
  },
  {
    title: 'Проктолог',
    id: '7',
  },
];

interface ConsultationItemProps {
  title: string;
  id: string;
}

const ConsultationItem: FC<ConsultationItemProps> = ({ title, id }) => {
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

export const ConsultationNavigation = () => {
  return (
    <Grid container spacing={2}>
      {mockItems.map(({ title, id }) => (
        <ConsultationItem key={id} title={title} id={id} />
      ))}
    </Grid>
  );
};
