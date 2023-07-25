import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Typography } from '@/ui-kit';
import { SearchInput } from '../search-input';
import styles from './SearchBlock.module.scss';

const links = [
  { href: '/clinics', label: 'Clinics' },
  { href: '/labs', label: 'Labs' },
  { href: '/analyzes', label: 'Analyzes' },
  { href: '/consultations', label: 'Consultations' },
  { href: '/diagnostics', label: 'Diagnostics' },
];

const SearchNavigation = () => {
  const t = useTranslations('SearchNavigation');

  return (
    <ul className={styles.list}>
      {links.map(({ label, href }) => (
        <li key={label}>
          <Link href={href} className={styles.link}>
            <Typography component="h4" color="white">
              {t(label)}
            </Typography>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const SearchBlock = () => {
  return (
    <div>
      <SearchNavigation />
      <SearchInput />
    </div>
  );
};
