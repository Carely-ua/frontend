'use client';

import { useState } from 'react';
import classNames from 'classnames';
import { Navigation } from '../navigation';
import { Logo } from '../logo';
import styles from './Header.module.scss';
import { LocationsSelector, ProfileButton, CartButton } from './components';

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const clickHandler = () => {
    setShowMobileMenu(false);
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.wrapper}>
        <div className={classNames('container', styles.header)}>
          <div className={styles.section}>
            <div className={styles.logo}>
              <Logo clickHandler={clickHandler} />
            </div>
            <div className={styles.locationsSelector}>
              <LocationsSelector />
            </div>
          </div>
          <div className={styles.navigation}>
            <Navigation />
          </div>
          <div className={styles.section}>
            <CartButton clickHandler={clickHandler} />
            <ProfileButton clickHandler={clickHandler} />
            <div
              className={classNames(styles.burger, { [styles.burgerActive]: showMobileMenu })}
              onClick={() => setShowMobileMenu(prev => !prev)}>
              <span />
            </div>
          </div>
        </div>
      </header>
      {showMobileMenu && (
        <>
          <div className={styles.mobileMenu}>
            <Navigation type="vertical" clickHandler={clickHandler} />
          </div>
          <div className={styles.background} onClick={clickHandler} />
        </>
      )}
    </div>
  );
};
