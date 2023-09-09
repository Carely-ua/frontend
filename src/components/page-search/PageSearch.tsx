import { FC } from 'react';
import { Typography } from '@/ui-kit';
import { SearchInput } from '../search-input';
import { SectionIcon, SectionIconProps } from '../section-icon';
import styles from './PageSearch.module.scss';

export interface PageSearchProps extends SectionIconProps {
  title: string;
}

export const PageSearch: FC<PageSearchProps> = ({ icon, title }) => {
  return (
    <div className={styles.pageSearch}>
      <div className={styles.topSection}>
        <Typography component="h2" color="white">
          {title}
        </Typography>
        <SectionIcon icon={icon} />
      </div>
      <div className={styles.searchField}>
        <SearchInput leftIcon="Hospital" rightIcon="Search" placeholder="Введіть назву клініки" />
      </div>
    </div>
  );
};
