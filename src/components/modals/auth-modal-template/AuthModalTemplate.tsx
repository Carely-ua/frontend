import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Typography } from '@/ui-kit';
import { AuthForm, AuthFormProps } from '../auth-form';
import styles from './AuthModalTemplate.module.scss';

interface AuthModalTemplate extends AuthFormProps {
  title: string;
  description: string;
}

export const AuthModalTemplate: FC<AuthModalTemplate> = ({
  title,
  description,
  successSignInHandler,
}) => {
  return (
    <div className={styles.modal}>
      <div className={classNames(styles.section, styles.contentSection)}>
        <Typography component="h2" color="white" gutterBottom="md">
          {title}
        </Typography>
        <Typography component="h4" color="white" weight="medium" className={styles.description}>
          {description}
        </Typography>
        <Image
          className={styles.image}
          src="/images/woman.png"
          alt="woman"
          width="170"
          height="280"
        />
      </div>
      <div className={styles.section}>
        <AuthForm successSignInHandler={successSignInHandler} />
      </div>
    </div>
  );
};