import { useTranslations } from 'next-intl';
import Tabs from '@mui/base/Tabs';
import Tab from '@mui/base/Tab';
import TabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import classNames from 'classnames';
import { Typography } from '@/ui-kit';
import styles from './TopServices.module.scss';
import { Carousel } from './components';

export const TopServices = () => {
  const t = useTranslations('TopServices');

  return (
    <div className={classNames('container', styles.wrapper)}>
      <div className={styles.title}>
        <Typography component="h1">{t('title')}</Typography>
        <span className={styles.titleLine} />
      </div>
      <Tabs defaultValue={1}>
        <TabsList className={styles.tabList}>
          <Tab value={1} slots={{ root: 'div' }}>
            <Typography component="p" color="dark-grey">
              {t('consultations')}
            </Typography>
          </Tab>
          <Tab value={2} slots={{ root: 'div' }}>
            <Typography component="p" color="dark-grey">
              {t('analyzes')}
            </Typography>
          </Tab>
          <Tab value={3} slots={{ root: 'div' }}>
            <Typography component="p" color="dark-grey">
              {t('diagnostics')}
            </Typography>
          </Tab>
        </TabsList>
        <TabPanel value={1}>
          <Carousel />
        </TabPanel>
        <TabPanel value={2}>analyzes</TabPanel>
        <TabPanel value={3}>diagnostics</TabPanel>
      </Tabs>
    </div>
  );
};
