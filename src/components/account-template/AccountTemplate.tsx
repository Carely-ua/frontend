import { ReactNode, FC } from 'react';
import { AccountNavigation } from '../account-navigation';
import styles from './AccountTemplate.module.scss';

interface AccountTemplateProps {
  children: ReactNode;
}

export const AccountTemplate: FC<AccountTemplateProps> = ({ children }) => {
  return (
    <div className={styles.accountTemplate}>
      <div className={styles.accountNavigation}>
        <AccountNavigation />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
