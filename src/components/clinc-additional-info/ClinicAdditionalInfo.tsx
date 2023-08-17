import Tabs from '@mui/base/Tabs';
import Tab from '@mui/base/Tab';
import TabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import { FC } from 'react';
import { Typography } from '@/ui-kit';
import { Reviews, ReviewsProps } from '../reviews';
import styles from './ClinicAdditionalInfo.module.scss';

interface ClinicAdditionalInfoProps extends ReviewsProps {}

export const ClinicAdditionalInfo: FC<ClinicAdditionalInfoProps> = ({
  rating,
  reviews,
  reviewsCount,
}) => {
  return (
    <Tabs defaultValue={1} className={styles.clinicAdditionalInfo}>
      <TabsList className={styles.tabList}>
        <Tab value={1} slots={{ root: 'div' }}>
          <Typography component="p" color="dark-grey">
            Відгуки
          </Typography>
        </Tab>
        <Tab value={2} slots={{ root: 'div' }}>
          <Typography component="p" color="dark-grey">
            Про клініку
          </Typography>
        </Tab>
      </TabsList>
      <TabPanel value={1}>
        <Reviews rating={rating} reviews={reviews} reviewsCount={reviewsCount} />
      </TabPanel>
      <TabPanel value={2}>Про клініку</TabPanel>
    </Tabs>
  );
};
