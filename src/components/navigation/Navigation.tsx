'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
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
  clickHandler?(): void;
}

export const Navigation: FC<NavigationProps> = ({ type = 'horizontal', clickHandler }) => {
  const t = useTranslations('Navigation');

  return (
    <nav>
      <ul className={classNames(styles.list, styles[`list--${type}`])}>
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              onClick={clickHandler}
              href={href}
              className={classNames(styles.link, styles[`link--${type}`])}>
              <Typography component="h5">{t(label)}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
