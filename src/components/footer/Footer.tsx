import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Typography } from '@/ui-kit';
import { Logo } from '../logo';
import { Navigation } from '../navigation';
import styles from './Footer.module.scss';

const links = [
  { href: '/', label: 'Services' },
  { href: '/', label: 'AboutUs' },
  { href: '/', label: 'Rating' },
  { href: '/', label: 'Partners' },
  { href: '/', label: 'CorporateProgram' },
  { href: '/', label: 'Rules' },
];

const Payments = () => {
  const t = useTranslations('Footer');

  return (
    <div className={styles.paymentsWrap}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div>
        <Typography component="p" color="dark-grey" gutterBottom="xlg">
          {t('Payments')}
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

const SecondaryNavigation = () => {
  const t = useTranslations('SecondaryNavigation');

  return (
    <nav className={styles.secondaryMenu}>
      <ul className={styles.secondaryMenuList}>
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link href={href} className={styles.secondaryMenuLink}>
              <Typography component="h4" gutterBottom="xlg">
                {t(label)}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Contacts = () => {
  const t = useTranslations('Footer');

  return (
    <div className={styles.contacts}>
      <Typography component="p" color="dark-grey" gutterBottom="xlg">
        {t('Contacts')}
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
  const t = useTranslations('Footer');

  return (
    <div>
      <Typography component="p" color="dark-grey" gutterBottom="xlg">
        {t('Social')}
      </Typography>
    </div>
  );
};

const Copyright = () => {
  const t = useTranslations('Copyright');

  return (
    <div className={styles.copyright}>
      <Typography component="h4" weight="medium" color="dark-grey">
        {t('text')}
      </Typography>
      <Link href="/" className={styles.copyrightLink}>
        <Typography component="h4" weight="medium" color="dark-grey">
          {t('link')}
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
          <SecondaryNavigation />
          <Contacts />
          <Social />
        </div>

        <Copyright />
      </div>
    </footer>
  );
};
