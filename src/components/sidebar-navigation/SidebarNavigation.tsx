import { FC } from 'react';
import Link from 'next/link';
import { Typography } from '@/ui-kit';
import { SectionIcon } from '../section-icon';
import { SVG } from '../svg';
import styles from './SidebarNavigation.module.scss';

interface SidebarNavigationProps {
  title: string;
  baseUrl: string;
  sections: Array<{ name: string; id: string }>;
  categoryId: string;
}

export const SidebarNavigation: FC<SidebarNavigationProps> = ({
  title,
  baseUrl,
  sections,
  categoryId,
}) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <Typography component="h2" color="white">
          {title}
        </Typography>
        <SectionIcon icon="Clinic" size="sm" />
      </div>
      <div className={styles.sidebarItems}>
        {sections.map(({ name, id }) => {
          const isActive = categoryId === id;

          return (
            <Link href={`${baseUrl}/${id}`} key={id} className={styles.sidebarItem}>
              <Typography component="h4" color={isActive ? 'secondary' : 'dark-grey'}>
                {name}
              </Typography>
              <SVG.Arrow />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
