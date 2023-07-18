import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@/ui-kit';
import { Logo } from '../logo';
import { Navigation } from '../navigation';
import styles from './Footer.module.scss';

const links = [
  { href: '/', label: 'Сeрвіс' },
  { href: '/', label: 'Про нас' },
  { href: '/', label: 'Про рейтинг' },
  { href: '/', label: 'Партнерам' },
  { href: '/', label: 'Корпоративна програма' },
  { href: '/', label: 'Правила сервісу' },
];

const Payments = () => {
  return (
    <div className={styles.paymentsWrap}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div>
        <Typography component="p" color="dark-grey" gutterBottom="xlg">
          Ми приймаємо
        </Typography>
        <div className={styles.payments}>
          <div>
            <Image src="/images/master-card.svg" alt="master-card" width="53" height="32" />
          </div>
          <div>
            <Image src="/images/visa.svg" alt="visa" width="106" height="32" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondaryMenu = () => {
  return (
    <nav className={styles.secondaryMenu}>
      <ul className={styles.secondaryMenuList}>
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link href={href} className={styles.secondaryMenuLink}>
              <Typography component="h4" gutterBottom="xlg">
                {label}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <Typography component="p" color="dark-grey" gutterBottom="xlg">
        Контакти
      </Typography>
      <Typography component="h4" weight="medium" gutterBottom="xlg">
        068 000 11 22
      </Typography>
      <Typography component="h4" weight="medium" gutterBottom="xlg">
        068 000 11 22
      </Typography>
      <Typography component="h4" weight="medium" gutterBottom="xlg">
        carely@mail.com
      </Typography>
    </div>
  );
};

const Social = () => {
  return (
    <div>
      <Typography component="p" color="dark-grey" gutterBottom="xlg">
        Ми у соцмережаї
      </Typography>
    </div>
  );
};

const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <Typography component="h4" weight="medium" color="dark-grey">
        © 2021 Всі права захищені Carely
      </Typography>
      <Link href="/" className={styles.copyrightLink}>
        <Typography component="h4" weight="medium" color="dark-grey">
          Політика конфіденційності
        </Typography>
      </Link>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.main}>
          <Payments />
          <div className={styles.menu}>
            <Navigation type="vertical" />
          </div>
          <SecondaryMenu />
          <Contacts />
          <Social />
        </div>

        <Copyright />
      </div>
    </footer>
  );
};
