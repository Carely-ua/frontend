import { FC } from 'react';
import Image from 'next/image';
import { Typography } from '@/ui-kit';
import styles from './SidebarNavigation.module.scss';

//TODO: replace it, it's a temporary solution
const SidebarItems = [
  { name: 'Гормональна панель' },
  { name: 'Панель пренатальної діагностики' },
  { name: 'Панель каріотипування' },
  { name: 'Онкологічна панель' },
  { name: 'Інфекційна панель' },
  { name: 'Панель імунологіїи' },
  { name: 'Панель бактеріологічних досліджень' },
  { name: 'Панель цитологічних досліджень' },
  { name: 'Панель патогістологічних досліджень' },
];

interface SidebarNavigationProps {
  title: string;
}

export const SidebarNavigation: FC<SidebarNavigationProps> = ({ title }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <Typography component="h2" color="white">
          {title}
        </Typography>
      </div>
      <div className={styles.sidebarItems}>
        {SidebarItems.map(({ name }, index) => (
          <div key={index} className={styles.sidebarItem}>
            <Typography component="h4" color="dark-grey">
              {name}
            </Typography>
            <Image src="/icons/right-arrow.svg" alt="icon" width={10} height={18} />
          </div>
        ))}
      </div>
    </div>
  );
};
