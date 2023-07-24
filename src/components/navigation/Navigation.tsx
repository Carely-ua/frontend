import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import classNames from 'classnames';
import { Typography } from '@/ui-kit';
import styles from './Navigation.module.scss';

const links = [
  { href: '/clinics', label: 'Clinics' },
  { href: '/labs', label: 'Labs' },
  { href: '/analyzes', label: 'Analyzes' },
  { href: '/consultations', label: 'Consultations' },
  { href: '/diagnostics', label: 'Diagnostics' },
];

interface NavigationProps {
  type?: 'horizontal' | 'vertical';
}

export const Navigation: FC<NavigationProps> = ({ type = 'horizontal' }) => {
  const t = useTranslations('Navigation');

  return (
    <nav>
      <ul className={classNames(styles.list, styles[`list--${type}`])}>
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link href={href} className={classNames(styles.link, styles[`link--${type}`])}>
              <Typography component="h4">{t(label)}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
