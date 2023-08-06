import { ReactNode, FC } from 'react';
import { AccountNavigation } from '../account-navigation';
import styles from './AccountTemplate.module.scss';

interface AccountTemplateProps {
  children: ReactNode;
}

export const AccountTemplate: FC<AccountTemplateProps> = ({ children }) => {
  return (
    <div className={styles.accountTemplate}>
      <AccountNavigation />
      <div>{children}</div>
    </div>
  );
};
