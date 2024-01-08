import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Typography } from '@/ui-kit';
import { Logo } from '../logo';
import { Navigation } from '../navigation';
import { SVG } from '../svg';
import styles from './Footer.module.scss';

const links = [
  { href: '/about', label: 'AboutUs' },
  { href: '/rating', label: 'Rating' },
  { href: '/partners', label: 'Partners' },
  { href: '/', label: 'Rules' },
];

const INSTAGRAM_LINK = 'https://www.instagram.com/carely.ua';
const FACEBOOK_LINK =
  'https://www.facebook.com/people/Carely-%D0%B2%D1%81%D1%96-%D0%BA%D0%BB%D1%96%D0%BD%D1%96%D0%BA%D0%B8-%D1%82%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BC%D1%96%D1%81%D1%82%D0%B0/61552903588089';

const Social = () => {
  const t = useTranslations('Footer');

  return (
    <div>
      <Typography component="p" color="dark-grey" gutterBottom="xlg">
        {t('Social')}
      </Typography>
      <div className={styles.socialIcons}>
        <a target="_blank" href={INSTAGRAM_LINK} className={styles.socialIcon}>
          <SVG.Instagram width={34} height={34} />
        </a>
        <a target="_blank" href={FACEBOOK_LINK} className={styles.socialIcon}>
          <SVG.Facebook width={34} height={34} />
        </a>
      </div>
    </div>
  );
};

const Payments = () => {
  const t = useTranslations('Footer');

  return (
    <div className={styles.paymentsWrap}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <Social />
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
              <Typography component="h5" gutterBottom="xlg">
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
      <Typography component="h5" weight="medium" gutterBottom="xlg">
        carely.ua@gmail.com
      </Typography>
    </div>
  );
};

const Copyright = () => {
  const t = useTranslations('Copyright');

  return (
    <div className={styles.copyright}>
      <Typography component="h5" color="dark-grey">
        {t('text')}
      </Typography>
      <Link href="/" className={styles.copyrightLink}>
        <Typography component="h5" color="dark-grey">
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
          {/* <Social /> */}
        </div>

        <Copyright />
      </div>
    </footer>
  );
};
