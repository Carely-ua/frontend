import Link from 'next/link';
import { Typography } from '@/ui-kit';
import { SVG } from '../svg';
import styles from './AccountNavigation.module.scss';
import { LogoutButton } from './LogoutButton';

const accountSections = [
  {
    title: 'Акаунт',
    href: '/account/profile',
    Icon: SVG.DarkUser,
  },
  {
    title: 'Мої аналізи',
    href: '/account/analyzes',
    Icon: SVG.Analyze,
  },
  {
    title: 'Мої консультації',
    href: '/account/consultations',
    Icon: SVG.Doctor,
  },
  {
    title: 'Мої діагностика',
    href: '/account/diagnostics',
    Icon: SVG.Diagnostic,
  },
];

export const AccountNavigation = () => {
  return (
    <ul className={styles.accountNavigation}>
      {accountSections.map(({ title, href, Icon }) => (
        <li key={title} className={styles.item}>
          <Link className={styles.link} href={href}>
            <div className={styles.linkContent}>
              <Icon width={18} height={18} color="red" />
              <Typography className={styles.text} component="h4">
                {title}
              </Typography>
            </div>
            <SVG.Arrow />
          </Link>
        </li>
      ))}
      <li>
        <LogoutButton>
          <div className={styles.link}>
            <div className={styles.linkContent}>
              <SVG.Logout width={18} height={18} />
              <Typography className={styles.text} component="h4">
                Вийти
              </Typography>
            </div>
            <SVG.Arrow />
          </div>
        </LogoutButton>
      </li>
    </ul>
  );
};
