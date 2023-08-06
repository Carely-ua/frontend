import { FC } from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { Typography } from '@/ui-kit';
import { SVG, SVGType } from '@/components/svg';
import styles from './NavigationSections.module.scss';

const items = [
  {
    title: 'Clinics.title',
    text: 'Clinics.text',
    label: 'Clinics.label',
    buttonText: 'Clinics.buttonText',
    linkUrl: '/clinics',
    Icon: SVG.Clinic,
    image: 'clinics-item',
    size: 3,
    hasGradient: true,
    gradient: 'linear-gradient(197deg, rgba(0, 88, 193, 0.56) 0%, rgba(0, 198, 146, 0.8) 100%)',
  },
  {
    title: 'Labs.title',
    text: 'Labs.text',
    label: 'Labs.label',
    buttonText: 'Labs.buttonText',
    linkUrl: '/labs',
    Icon: SVG.Lab,
    image: 'labs-item',
    size: 3,
    hasGradient: true,
    gradient: 'linear-gradient(19deg, rgba(0, 88, 193, 0.56) 0%, rgba(0, 198, 146, 0.8) 100%)',
    width: 40,
    height: 40,
  },
  {
    title: 'Analyzes.title',
    text: 'Analyzes.text',
    label: 'Analyzes.label',
    buttonText: 'Analyzes.buttonText',
    linkUrl: '/analyzes',
    Icon: SVG.Analyze,
    image: 'analyzes-item',
    size: 6,
    hasGradient: false,
    gradient: 'linear-gradient(46deg, #292929 0%, rgba(41, 41, 41, 0.49) 61.57%, #292929 100%)',
  },
  {
    title: 'Consultations.title',
    text: 'Consultations.text',
    label: 'Consultations.label',
    buttonText: 'Consultations.buttonText',
    linkUrl: '/consultations',
    Icon: SVG.Doctor,
    image: 'consultations-item',
    size: 4,
    hasGradient: true,
    gradient: 'linear-gradient(180deg, rgba(0, 88, 193, 0.56)0%, rgba(0, 198, 146, 0.8) 100%)',
  },
  {
    title: 'Diagnostics.title',
    text: 'Diagnostics.text',
    label: 'Diagnostics.label',
    buttonText: 'Diagnostics.buttonText',
    linkUrl: '/diagnostics',
    Icon: SVG.Diagnostic,
    image: 'diagnostics-item',
    size: 2,
    hasGradient: true,
    gradient: 'linear-gradient(44deg, rgba(0, 88, 193, 0.56) 0%, rgba(0, 198, 146, 0.8) 100%)',
  },
];

interface ItemProps {
  title: string;
  text: string;
  label: string;
  buttonText: string;
  linkUrl: string;
  Icon: SVGType;
  image: string;
  size: number;
  gradient: string;
  width?: number;
  height?: number;
}

const Item: FC<ItemProps> = ({
  label,
  image,
  Icon,
  title,
  text,
  buttonText,
  size,
  gradient,
  linkUrl,
  width,
  height,
}) => {
  const t = useTranslations('Sections');

  return (
    <Grid item xs={size}>
      <div className={classNames(styles.item)}>
        <Image className={styles.image} fill src={`/images/${image}.png`} alt="background-image" />
        <div style={{ background: gradient }} className={styles.itemContent}>
          <div className={styles.topSection}>
            <Typography component="h4" color="white">
              {t(label)}
            </Typography>
            <div className={styles.icon}>
              <Icon width={width || 32} height={height || 32} />
            </div>
          </div>
          <div>
            <Typography component="h2" color="white" gutterBottom="lg">
              {t(title)}
            </Typography>
            <Typography component="p" color="white" gutterBottom="lg">
              {t(text)}
            </Typography>
            <Link href={linkUrl}>{t(buttonText)}</Link>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export const NavigationSections = () => {
  return (
    <Grid container spacing={3} columns={{ xs: 6 }}>
      {items.map((items, index) => (
        <Item {...items} key={index} />
      ))}
    </Grid>
  );
};
