import { SVG } from '@/components/svg';
import { Typography } from '@/ui-kit';
import styles from './LocationsSelector.module.scss';

export const LocationsSelector = () => {
  return (
    <div className={styles.locationsSelector}>
      <Typography component="p" color="dark-grey">
        Вінниця
      </Typography>
      <div className={styles.locationsSelectorButton}>
        <SVG.Arrow height={14} width={7} />
      </div>
      <div className={styles.locationsSelectorMessage}>
        <Typography component="p" color="white">
          Наразі сервіс працює тільки у м. Вінниці
        </Typography>
      </div>
    </div>
  );
};
