import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@/ui-kit';
import styles from './AccountNavigation.module.scss';

const accountSections = [
  {
    title: 'Акаунт',
    href: '/account/profile',
    icon: 'dark-user',
  },
  {
    title: 'Мої аналізи',
    href: '/account/analyzes',
    icon: 'analyze',
  },
  {
    title: 'Мої консультації',
    href: '/account/consultations',
    icon: 'doctor',
  },
  {
    title: 'Мої діагностика',
    href: '/account/diagnostics',
    icon: 'diagnostic',
  },
];

export const AccountNavigation = () => {
  return (
    <ul className={styles.accountNavigation}>
      {accountSections.map(({ title, href, icon }) => (
        <li key={title} className={styles.item}>
          <Link className={styles.link} href={href}>
            <div className={styles.linkContent}>
              <Image src={`/icons/${icon}.svg`} alt="icon" width={18} height={18} />
              <Typography className={styles.text} component="h4">
                {title}
              </Typography>
            </div>
            <Image src="/icons/right-arrow.svg" alt="icon" width={10} height={18} />
          </Link>
        </li>
      ))}
      <li>
        <div className={styles.link}>
          <div className={styles.linkContent}>
            <Image src="/icons/logout.svg" alt="icon" width={18} height={18} />
            <Typography className={styles.text} component="h4">
              Вийти
            </Typography>
          </div>
          <Image src="/icons/right-arrow.svg" alt="icon" width={10} height={18} />
        </div>
      </li>
    </ul>
  );
};
