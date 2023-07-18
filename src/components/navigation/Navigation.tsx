import Link from 'next/link';
import { FC } from 'react';
import classNames from 'classnames';
import { Typography } from '@/ui-kit';
import styles from './Navigation.module.scss';

const links = [
  { href: '/clinics', label: 'Клініки' },
  { href: '/labs', label: 'Лабораторії' },
  { href: '/analyzes', label: 'Аналізи' },
  { href: '/consultations', label: 'Консультації' },
  { href: '/diagnostics', label: 'Діагностика' },
];

interface NavigationProps {
  type?: 'horizontal' | 'vertical';
}

export const Navigation: FC<NavigationProps> = ({ type = 'horizontal' }) => {
  return (
    <nav>
      <ul className={classNames(styles.list, styles[`list--${type}`])}>
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link href={href} className={classNames(styles.link, styles[`link--${type}`])}>
              <Typography component="h4">{label}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
