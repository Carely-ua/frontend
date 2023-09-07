import classNames from 'classnames';
import { Navigation } from '../navigation';
import { Logo } from '../logo';
import styles from './Header.module.scss';
import { LocationsSelector, ProfileButton, CartButton } from './components';

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={classNames('container', styles.header)}>
        <div className={styles.section}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.locationsSelector}>
            <LocationsSelector />
          </div>
        </div>
        <div className={styles.navigation}>
          <Navigation />
        </div>
        <div className={styles.section}>
          <CartButton />
          <ProfileButton />
          <div className={styles.burger}>
            <span />
          </div>
        </div>
      </div>
    </header>
  );
};
