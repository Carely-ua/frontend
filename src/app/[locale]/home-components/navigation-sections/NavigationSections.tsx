import { FC } from 'react';
import { Grid, GridSize } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button, Typography } from '@/ui-kit';
import { SVGNameType } from '@/components/svg';
import { SectionIcon } from '@/components';
import styles from './NavigationSections.module.scss';

const items = [
  {
    title: 'Clinics.title',
    text: 'На сайті представлені кращі клініки міста. Обирайте спираючись на відгуки реальних пацієнтів, бронюйте відвідування на сайті Carely зі знижкою!',
    label: 'Clinics.label',
    buttonText: 'Clinics.buttonText',
    linkUrl: '/clinics',
    icon: 'Clinic',
    image: 'clinics-item',
    size: 3,
    hasGradient: true,
    gradient: 'linear-gradient(197deg, rgba(0, 88, 193, 0.56) 0%, rgba(0, 198, 146, 0.8) 100%)',
  },
  {
    title: 'Labs.title',
    text: 'Всі лабораторії на Carely! Оберіть зручну для вас за розміщенням, послугам, що надаються і чесному рейтингу.',
    label: 'Labs.label',
    buttonText: 'Labs.buttonText',
    linkUrl: '/labs',
    icon: 'Lab',
    image: 'labs-item',
    size: 3,
    hasGradient: true,
    gradient: 'linear-gradient(19deg, rgba(0, 88, 193, 0.56) 0%, rgba(0, 198, 146, 0.8) 100%)',
  },
  {
    title: 'Analyzes.title',
    text: 'На Carely зручно обирати потрібні вам аналізи, адже ви можете не тільки порівняти ціни, а й отримати ваучер на проведення аналізу зі знижкою.',
    label: 'Analyzes.label',
    buttonText: 'Analyzes.buttonText',
    linkUrl: '/analyzes',
    icon: 'Analyze',
    image: 'analyzes-item',
    size: 3,
    smSize: 6,
    hasGradient: false,
    gradient: 'linear-gradient(46deg, #292929 0%, rgba(41, 41, 41, 0.49) 61.57%, #292929 100%)',
  },
  {
    title: 'Consultations.title',
    text: 'Кращі лікарі міста зібрані на Carely. Ви легко знайдете потрібного вам спеціаліста і переконаєтесь у його професійності завдяки відгукам інших пацієнтів.',
    label: 'Consultations.label',
    buttonText: 'Consultations.buttonText',
    linkUrl: '/consultations',
    icon: 'Doctor',
    image: 'consultations-item',
    size: 3,
    smSize: 4,
    hasGradient: true,
    gradient: 'linear-gradient(180deg, rgba(0, 88, 193, 0.56)0%, rgba(0, 198, 146, 0.8) 100%)',
  },
  {
    title: 'Diagnostics.title',
    text: 'Весь спектр діагностичних процедур та медзакладів, що їх надають - на Carely. Зробіть обміркований і правильний вибір завдяки рейтингу.',
    label: 'Diagnostics.label',
    buttonText: 'Diagnostics.buttonText',
    linkUrl: '/diagnostics',
    icon: 'Diagnostic',
    image: 'diagnostics-item',
    size: 3,
    smSize: 2,
    hasGradient: true,
    gradient: 'linear-gradient(44deg, rgba(0, 88, 193, 0.56) 0%, rgba(0, 198, 146, 0.8) 100%)',
  },
] as const;

interface ItemProps {
  title: string;
  text: string;
  label: string;
  buttonText: string;
  linkUrl: string;
  icon: SVGNameType;
  image: string;
  size: number;
  smSize?: number;
  gradient: string;
  width?: number;
  height?: number;
}

const Item: FC<ItemProps> = ({
  label,
  image,
  icon,
  title,
  text,
  buttonText,
  size,
  gradient,
  linkUrl,
  width,
  height,
  smSize,
}) => {
  const t = useTranslations('Sections');

  return (
    <Grid item xs={size} sm={smSize}>
      <div className={styles.item}>
        <Image className={styles.image} fill src={`/images/${image}.png`} alt="background-image" />
        <div style={{ background: gradient }} className={styles.itemContent}>
          <div className={styles.topSection}>
            <Typography component="h4" color="white">
              {t(label)}
            </Typography>
            <SectionIcon width={width || 32} height={height || 32} icon={icon} />
          </div>
          <div>
            <Typography component="h2" color="white" className={styles.title}>
              {t(title)}
            </Typography>
            <Typography component="p" color="white" gutterBottom="lg">
              {text}
            </Typography>
            <Link href={linkUrl} className={styles.link}>
              <Button buttonType="white">{t(buttonText)}</Button>
            </Link>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export const NavigationSections = () => {
  return (
    <Grid container spacing={3} columns={{ xs: 3, md: 6 }}>
      {items.map((items, index) => (
        <Item {...items} key={index} />
      ))}
    </Grid>
  );
};
