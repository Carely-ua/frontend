import { FC } from 'react';
import Image from 'next/image';
import { Typography } from '@/ui-kit';
import { SearchInput } from '../search-input';
import styles from './PageSearch.module.scss';

interface PageSearch {
  title: string;
  icon: string;
}

export const PageSearch: FC<PageSearch> = ({ title, icon = 'clinic' }) => {
  return (
    <div className={styles.pageSearch}>
      <div className={styles.topSection}>
        <Typography component="h2" color="white">
          Приватні клініки Києва
        </Typography>
        <div className={styles.icon}>
          <Image src={`/icons/${icon}.svg`} alt="icon" width={32} height={32} />
        </div>
      </div>
      <div className={styles.searchField}>
        <SearchInput
          leftIcon="hospital"
          rightIcon="search"
          placeholder="Введіть/виберіть напрямок або назву клініки"
        />
      </div>
    </div>
  );
};
