import { Map } from '../map';
import styles from './SearchResult.module.scss';

export const SearchResult = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>Search Result</div>
      <div className={styles.item}>
        <Map />
      </div>
    </div>
  );
};
