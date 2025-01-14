import classNames from 'classnames';
import { SearchBlock } from '../search-block';
import styles from './FooterSearch.module.scss';

export const FooterSearch = () => {
  return (
    <div className="container">
      <div className={styles.footerSearch}>
        <SearchBlock isFooter />
      </div>
    </div>
  );
};
